import { createHeader } from "./components/header";

addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const header = createHeader();
  app.prepend(header);
});
