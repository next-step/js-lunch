const EatingPlaceRadioGroup = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-radio-group");

  const handleClick = (event) => {
    if (event.target && event.target.closest(".name")) {
      divElement.classList.add("name");
      divElement.classList.remove("distance");
    }
    if (event.target && event.target.closest(".distance")) {
      divElement.classList.add("distance");
      divElement.classList.remove("name");
    }
  };

  const html = /* html */ `
    <div class="name">
      <input type="radio" id="name" name="criteria" value="name" 
      ${divElement.classList.contains("name") ? "checked" : ""} />
      <label for="name">이름순</label>
    </div>

    <div class="distance">
      <input type="radio" id="distance" name="criteria" value="distance"
      ${divElement.classList.contains("distance") ? "checked" : ""} />
      <label for="distance">거리순</label>
    </div>
  `;

  divElement.innerHTML = html;
  divElement.addEventListener("click", handleClick);
  container.appendChild(divElement);

  return container;
};

export default EatingPlaceRadioGroup;
