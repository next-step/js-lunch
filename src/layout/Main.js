import EatingPlaceList from "../widget/main/eating-place-list";
import EatingPlaceRadioGroup from "../widget/main/eating-place-radio-group";
import EatingPlaceSelect from "../widget/main/eating-place-select";

const Main = () => {
  const container = document.createElement("main");

  const render = () => {
    const html = /* html */ `
        <section class="eating-place-top-section" >
        </section>
    
        <section class="eating-place-bottom-section">
        </section>
    `;

    container.innerHTML = html;
    const topSection = container.querySelector(".eating-place-top-section");
    topSection.appendChild(EatingPlaceSelect());
    topSection.appendChild(EatingPlaceRadioGroup());

    const bottomSection = container.querySelector(
      ".eating-place-bottom-section",
    );
    bottomSection.appendChild(EatingPlaceList());

    return container;
  };

  render();

  return container;
};

export default Main;
