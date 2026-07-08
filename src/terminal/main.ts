import "../styles/terminal.css";
import { Terminal } from "./ui";

const term = new Terminal(document.querySelector("#app")!);
term.boot();
