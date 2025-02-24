import { createHeader } from "./components/Header";

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();

  body.prepend(header);
});
