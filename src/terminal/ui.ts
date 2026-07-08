import { runCommand, COMMAND_NAMES, type Line } from "./commands";

const PROMPT = "nami@sh:~$";

export class Terminal {
  private output: HTMLElement;
  private input: HTMLInputElement;
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
          <input class="term-input" autocomplete="off" autocapitalize="none"
                 spellcheck="false" aria-label="terminal input" />
        </div>
      </div>`;
    this.output = this.root.querySelector(".term-output")!;
    this.input = this.root.querySelector(".term-input")!;
    this.renderChips();
    this.bindInput();
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
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.exec(this.input.value);
        this.input.value = "";
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.history.length === 0) return;
        this.historyIdx = Math.max(0, this.historyIdx - 1);
        this.input.value = this.history[this.historyIdx] ?? "";
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        this.historyIdx = Math.min(this.history.length, this.historyIdx + 1);
        this.input.value = this.history[this.historyIdx] ?? "";
      } else if (e.key === "Tab" && !e.shiftKey) {
        const prefix = this.input.value.trim().toLowerCase();
        if (!prefix) return;
        const match = COMMAND_NAMES.find((c) => c.startsWith(prefix));
        if (match) {
          e.preventDefault();
          this.input.value = match;
        }
      }
    });
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
    el.className = `line line-${line.kind}`;
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
    const ghost = document.createElement("div");
    ghost.className = "line line-muted";
    this.output.appendChild(ghost);
    for (let i = 1; i <= cmd.length; i++) {
      ghost.textContent = `${PROMPT} ${cmd.slice(0, i)}`;
      await new Promise((r) => setTimeout(r, 70));
    }
    await new Promise((r) => setTimeout(r, 250));
    const result = runCommand(cmd);
    for (const l of result.lines) this.printLine(l);
    this.printLine({ text: "type `help` or click a command above", kind: "muted" });
    this.input.focus();
  }
}
