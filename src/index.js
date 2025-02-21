import "./styles/common.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

window.addEventListener("load", () => {
  const app = document.querySelector("#app");
  // eslint-disable-next-line spaced-comment
  app.innerHTML = /*html*/ `
  <div>
    ${Header()}
    ${Main()}
    ${Footer()}
  </div>`;
});
