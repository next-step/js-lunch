import imgSrc from "../../public/assets/favorite-icon-filled.png";

const EatingPlaceListItem = ({ title, timeToGo, description }) => {
  return /* html */ `<div 
  class="eating-place-list-item"
  >
    <img src=${imgSrc} alt="eating-place-list-item-img"/>
    <div class="eating-place-list-item-box">
      <div>${title}</div>
      <div class="time-to-go-label">${timeToGo}</div>
      <div class="description">${description}</div>
    </div>
  </div>
  `;
};

export default EatingPlaceListItem;
