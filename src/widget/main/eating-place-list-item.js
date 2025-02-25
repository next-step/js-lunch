const EatingPlaceListItem = ({ imageType, title, timeToGo, description }) => {
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-list-item");

  const handleClick = () => {
    console.log("data");
    const isOpen = divElement.dataset.open;
    divElement.dataset.open = isOpen === "true" ? "false" : "true";
  };

  const html = /* html */ `
      <img src=${imageType} alt="eating-place-list-item-img"/>
      <div class="eating-place-list-item-box">
        <div>
          <div class="eating-place-list-item-box-title">${title}</div>
          <div class="time-to-go-label">${timeToGo}</div>
        </div>
        <div class="description">${description}</div>
      </div>
    `;

  divElement.innerHTML = html;
  divElement.addEventListener("click", handleClick);

  return divElement;
};

export default EatingPlaceListItem;
