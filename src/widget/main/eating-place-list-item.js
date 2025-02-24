const EatingPlaceListItem = ({ imageType, title, timeToGo, description }) => {
  const container = document.createElement("div");
  container.classList.add("eating-place-list-item");
  const render = () => {
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

    container.innerHTML = html;

    return container;
  };

  render();

  return container;
};

export default EatingPlaceListItem;
