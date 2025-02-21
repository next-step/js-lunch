const EatingPlaceListItem = ({ imageType, title, timeToGo, description }) => {
  return /* html */ `<div 
  class="eating-place-list-item"
  >
    <img src=${imageType} alt="eating-place-list-item-img"/>
    <div class="eating-place-list-item-box">
      <div>
        <div class="eating-place-list-item-box-title">${title}</div>
        <div class="time-to-go-label">${timeToGo}</div>
      </div>
      <div class="description">${description}</div>
    </div>
  </div>
  `;
};

export default EatingPlaceListItem;
