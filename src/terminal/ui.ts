import { runCommand, COMMAND_NAMES, type Line } from "./commands";

const PROMPT = "nami@sh:~$";

export class Terminal {
  private output: HTMLElement;
  private input: HTMLInputElement;
  private suggest: HTMLElement;
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
    this.renderChips();
    this.bindInput();
    this.updateSuggestion();
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
    if (cmd) {
      this.history.push(cmd);
      this.historyIdx = this.history.length;
      this.printLine({ text: `${PROMPT} ${cmd}`, kind: "muted" });
    }
    const result = runCommand(cmd);
    if (result.action === "clear") {
      this.output.innerHTML = "";
      return;
    }
    if (result.action === "open-cv") {
      for (const l of result.lines) this.printLine(l);
      window.location.href = "/cv.html";
      return;
    }
    for (const l of result.lines) this.printLine(l);
    this.scrollToBottom();
  }

  printLine(line: Line) {
    const el = document.createElement("div");
    el.className = `line line-${line.kind}${line.indent ? " line-indent" : ""}`;
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
    } else {
      el.textContent = line.text || "\u00a0";
    }
    this.output.appendChild(el);
    this.scrollToBottom();
  }

  private scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  }

  /** Boot: type `whoami` character by character, then run it. */
  async boot() {
    const cmd = "whoami";
    await new Promise((r) => setTimeout(r, 550));
    const ghost = document.createElement("div");
    ghost.className = "line line-muted";
    this.output.appendChild(ghost);
    for (let i = 1; i <= cmd.length; i++) {
      ghost.textContent = `${PROMPT} ${cmd.slice(0, i)}`;
      await new Promise((r) => setTimeout(r, 120));
    }
    await new Promise((r) => setTimeout(r, 900));
    const result = runCommand(cmd);
    for (const l of result.lines) this.printLine(l);
    this.printLine({ text: "type `help` or click a command above", kind: "muted" });
    this.input.focus();
  }
}
