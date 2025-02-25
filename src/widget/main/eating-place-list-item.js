const EatingPlaceListItem = ({
  type,
  imageType,
  title,
  timeToGo,
  description,
  referenceLink,
}) => {
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-list-item");

  const handleClick = () => {
    // divElement.dataset.open = "true";
    const eatingPlaceDetailDrawer = document.querySelector(
      ".eating-place-detail-drawer",
    );
    divElement.dataset.open = "true";
    eatingPlaceDetailDrawer.dataset.item = JSON.stringify({
      type,
      title,
      timeToGo,
      description,
      referenceLink,
    });
  };

  const html = /* html */ `
      <img src=${imageType} alt="eating-place-list-item-img" />
      <div class="eating-place-list-item-box" data-type=${type} data-reference-link=${referenceLink}>
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
