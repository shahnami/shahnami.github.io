import { runCommand, COMMAND_NAMES, type Line } from "./commands";

const PROMPT = "nami@sh:~$";
/** Stagger, in ms, between consecutive output lines "streaming" in on a command run. */
const STREAM_STEP_MS = 16;
/** Width of one tree-depth column, matching "├── "/"└── " (glyph + gap before text). */
const TREE_COL_CH = 4;

export class Terminal {
  private output: HTMLElement;
  private input: HTMLInputElement;
  private suggest: HTMLElement;
  private scrollBtn: HTMLButtonElement;
  private history: string[] = [];
  private historyIdx = -1;

  constructor(private root: HTMLElement) {
    this.root.innerHTML = `
      <div class="term">
        <header class="term-bar">
          <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
          <span class="term-title">nami@sh: ~/portfolio</span>
          <a class="cv-btn" href="/nami-shah-cv.pdf" download>Download CV (PDF)</a>
        </header>
        <div class="term-chips" role="toolbar" aria-label="commands"></div>
        <div class="term-output" aria-live="polite"></div>
        <button class="scroll-bottom-btn" aria-label="Scroll to bottom of output" hidden>&#8595;</button>
        <div class="term-prompt-row">
          <span class="term-prompt">${PROMPT}</span>
          <div class="term-input-wrap">
            <input class="term-input" autocomplete="off" autocapitalize="none"
                   spellcheck="false" aria-label="terminal input" />
            <span class="term-suggest" aria-hidden="true"></span>
          </div>
        </div>
      </div>`;
    this.output = this.root.querySelector(".term-output")!;
    this.input = this.root.querySelector(".term-input")!;
    this.suggest = this.root.querySelector(".term-suggest")!;
    this.scrollBtn = this.root.querySelector(".scroll-bottom-btn")!;
    this.renderChips();
    this.bindInput();
    this.updateSuggestion();
    this.output.addEventListener("scroll", () => this.updateScrollButton());
    this.scrollBtn.addEventListener("click", () => this.scrollToContentBottom());
    this.root.querySelector(".term")!.addEventListener("click", (e) => {
      // clicking anywhere focuses the prompt, unless selecting text or clicking a link
      if ((e.target as HTMLElement).closest("a,button")) return;
      if (window.getSelection()?.toString()) return;
      this.input.focus();
    });
  }

  private renderChips() {
    const chips = this.root.querySelector(".term-chips")!;
    for (const name of COMMAND_NAMES) {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = name;
      b.addEventListener("click", () => this.exec(name));
      chips.appendChild(b);
    }
  }

  private bindInput() {
    this.input.addEventListener("input", () => this.updateSuggestion());
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.exec(this.input.value);
        this.input.value = "";
        this.updateSuggestion();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.history.length === 0) return;
        this.historyIdx = Math.max(0, this.historyIdx - 1);
        this.input.value = this.history[this.historyIdx] ?? "";
        this.updateSuggestion();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        this.historyIdx = Math.min(this.history.length, this.historyIdx + 1);
        this.input.value = this.history[this.historyIdx] ?? "";
        this.updateSuggestion();
      } else if (e.key === "Tab" && !e.shiftKey) {
        const match = this.currentSuggestionMatch();
        if (match) {
          e.preventDefault();
          this.input.value = match;
          this.updateSuggestion();
        }
      } else if (e.key === "ArrowRight" && this.input.selectionStart === this.input.value.length) {
        const match = this.currentSuggestionMatch();
        if (match) {
          e.preventDefault();
          this.input.value = match;
          this.updateSuggestion();
        }
      }
    });
  }

  /** The unique command that starts with what's currently typed, if any. */
  private currentSuggestionMatch(): string | null {
    const typed = this.input.value.trim().toLowerCase();
    if (!typed) return null;
    const match = COMMAND_NAMES.find((c) => c.startsWith(typed));
    return match && match !== typed ? match : null;
  }

  /**
   * Renders the greyed-out remainder of the matching command as a genuine
   * sibling right after the input (fish-shell style), rather than an
   * overlay div stacked on top of it – overlay alignment depends on the
   * input and the div rendering text with pixel-identical metrics, which
   * isn't reliable across browsers. Instead, since the terminal font is
   * monospace, the input is sized in `ch` units to exactly fit what's been
   * typed, so the suggestion span butts up against it inline with no gap.
   */
  private updateSuggestion() {
    const value = this.input.value;
    this.input.style.width = `${Math.max(1, value.length)}ch`;
    const match = this.currentSuggestionMatch();
    this.suggest.textContent = match ? match.slice(value.trim().length) : "";
  }

  exec(raw: string) {
    const cmd = raw.trim();
    let echoEl: HTMLElement | null = null;
    if (cmd) {
      this.history.push(cmd);
      this.historyIdx = this.history.length;
      echoEl = this.printCommandEcho(cmd);
    }
    const result = runCommand(cmd);
    if (result.action === "clear") {
      this.output.innerHTML = "";
      this.updateScrollButton();
      return;
    }
    if (result.action === "open-cv") {
      for (const l of result.lines) this.printLine(l);
      window.location.href = "/cv.html";
      return;
    }
    // If the output opens with a tree, grow its trunk down from the rule
    // line itself, so the tree visibly hangs off the command that produced
    // it rather than starting out of nowhere a couple of lines down.
    if (echoEl && result.lines[0]?.treePath) echoEl.classList.add("has-tree");
    result.lines.forEach((l, i) => this.printLine(l, i * STREAM_STEP_MS));
    // Scroll only after every line is in the DOM – doing it right after the
    // echo line was appended clamped scrollTop back down because the
    // container wasn't tall enough yet to reach that offset.
    if (echoEl) this.scrollEchoToTop(echoEl);
    this.updateScrollButton();
  }

  /**
   * Scrolling to exactly `echoEl.offsetTop` scrolls past `.term-output`'s
   * own top padding, so only the very first command (where scrollTop is
   * naturally still 0) kept that breathing room under the chips bar –
   * every command after it landed with its rule line flush against the
   * container edge. Subtracting the padding back out keeps that gap
   * consistent no matter which command just ran.
   */
  private scrollEchoToTop(echoEl: HTMLElement) {
    const paddingTop = parseFloat(getComputedStyle(this.output).paddingTop) || 0;
    this.output.scrollTop = echoEl.offsetTop - paddingTop;
  }

  /**
   * Shows a floating "scroll to bottom" affordance whenever the just-run
   * command's output is taller than the visible area, so long outputs
   * (e.g. `experience`) don't leave the rest of the content undiscoverable
   * below the fold. Measured against the last real line's position, not
   * `scrollHeight`, since `.term-output` carries a permanent bottom-padding
   * buffer (scroll headroom, see terminal.css) that would otherwise always
   * register as "more content below".
   */
  private updateScrollButton() {
    const last = this.output.lastElementChild as HTMLElement | null;
    if (!last) {
      this.scrollBtn.hidden = true;
      return;
    }
    const outputBottom = this.output.getBoundingClientRect().bottom;
    const lastBottom = last.getBoundingClientRect().bottom;
    this.scrollBtn.hidden = lastBottom <= outputBottom + 4;
  }

  private scrollToContentBottom() {
    const last = this.output.lastElementChild as HTMLElement | null;
    if (!last) return;
    const target = last.offsetTop + last.offsetHeight - this.output.clientHeight;
    this.output.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }

  /**
   * Builds a labelled rule line, e.g. "nami@sh:~$ experience ──────────",
   * and appends it to the output. The trailing rule is a flex-grown div that
   * stretches to the panel's edge, so it works at any width/font size. This
   * doubles as the section separator (command outputs never end the same
   * way, so a plain blank line was an inconsistent gap) and as the command
   * echo, styled two-toned like the live prompt. Returns both the line and
   * its command span so callers can fill the span in immediately
   * (printCommandEcho), type into it over time (boot), or scroll the line
   * into view.
   */
  private appendEchoLine(): { el: HTMLElement; cmdSpan: HTMLElement } {
    const el = document.createElement("div");
    el.className = "line line-echo";
    const promptSpan = document.createElement("span");
    promptSpan.className = "echo-prompt";
    promptSpan.textContent = PROMPT;
    const cmdSpan = document.createElement("span");
    cmdSpan.className = "echo-cmd";
    const fill = document.createElement("span");
    fill.className = "echo-rule-fill";
    el.append(promptSpan, cmdSpan, fill);
    this.output.appendChild(el);
    return { el, cmdSpan };
  }

  /**
   * Prints the rule line for a just-run command and returns it so `exec`
   * can scroll it to the top of the visible area once the rest of that
   * command's output has been appended too – you should always land on
   * the start of what you just ran, not its tail end.
   */
  private printCommandEcho(cmd: string): HTMLElement {
    const { el, cmdSpan } = this.appendEchoLine();
    cmdSpan.textContent = cmd;
    return el;
  }

  /**
   * `delayMs` staggers this line's CSS reveal animation (see `.line` in
   * terminal.css) so a command's output visibly "streams" in line by line
   * rather than appearing all at once – a quick, readable stand-in for a
   * matrix-style reveal that also makes it obvious when a command's
   * output has finished (the streaming stops).
   */
  /**
   * Draws this line's tree columns as absolutely-positioned overlays rather
   * than baked-in "├── "/"└── " characters, so the connecting pipe is real
   * geometry (each column spans exactly this row's box, full height by
   * default) instead of a character glyph that leaves a gap whenever
   * `line-height` adds space above/below it. Consecutive rows' columns then
   * tile into one continuous line automatically, at any depth, since there's
   * no margin between `.line` elements. Only the deepest column (this line's
   * own branch) gets a horizontal tick and, if it's the last child, stops
   * its vertical half-way instead of running the full row height.
   */
  private renderTreeColumns(el: HTMLElement, path: boolean[]) {
    const depth = path.length - 1;
    el.style.position = "relative";
    el.style.paddingLeft = `${(depth + 1) * TREE_COL_CH}ch`;
    path.forEach((isLast, i) => {
      const isOwnColumn = i === depth;
      const col = document.createElement("span");
      col.className = isOwnColumn
        ? `tree-col tree-branch${isLast ? " tree-last" : ""}`
        : `tree-col${isLast ? " tree-closed" : ""}`;
      col.style.left = `${i * TREE_COL_CH}ch`;
      el.appendChild(col);
    });
  }

  printLine(line: Line, delayMs = 0, extraClass?: string) {
    const el = document.createElement("div");
    el.className = extraClass ? `line line-${line.kind} ${extraClass}` : `line line-${line.kind}`;
    if (delayMs) el.style.animationDelay = `${delayMs}ms`;
    if (line.treePath) this.renderTreeColumns(el, line.treePath);
    if (line.kind === "link" && line.href) {
      const a = document.createElement("a");
      if (line.href.startsWith("obfuscated:")) {
        const b64 = line.href.slice("obfuscated:".length);
        a.textContent = line.text;
        a.href = "#";
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const mailto = atob(b64);
          a.textContent = mailto.replace("mailto:", "");
          a.href = mailto;
        });
      } else {
        a.textContent = line.text;
        a.href = line.href;
        a.target = "_blank";
        a.rel = "noopener";
      }
      el.appendChild(a);
    } else if (line.dimRange) {
      const [start, end] = line.dimRange;
      el.appendChild(document.createTextNode(line.text.slice(0, start)));
      const dim = document.createElement("span");
      dim.className = "text-dim";
      dim.textContent = line.text.slice(start, end);
      el.appendChild(dim);
      el.appendChild(document.createTextNode(line.text.slice(end)));
    } else {
      el.appendChild(document.createTextNode(line.text || "\u00a0"));
    }
    this.output.appendChild(el);
  }

  /** Boot: type `whoami` character by character, then run it. */
  async boot() {
    const cmd = "whoami";
    const result = runCommand(cmd);
    await new Promise((r) => setTimeout(r, 550));
    const { el: echoEl, cmdSpan } = this.appendEchoLine();
    if (result.lines[0]?.treePath) echoEl.classList.add("has-tree");
    for (let i = 1; i <= cmd.length; i++) {
      cmdSpan.textContent = cmd.slice(0, i);
      await new Promise((r) => setTimeout(r, 120));
    }
    await new Promise((r) => setTimeout(r, 900));
    result.lines.forEach((l, i) => this.printLine(l, i * STREAM_STEP_MS));
    this.printLine(
      { text: "type `help` or click a command above", kind: "muted" },
      result.lines.length * STREAM_STEP_MS,
      "line-hint",
    );
    this.updateScrollButton();
    this.input.focus();
  }
}
