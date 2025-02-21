const EatingPlaceRadioGroup = () => {
  return /* html */ `<div
    class="eating-place-radio-group"
  ><div>
    <input type="radio" id="name" name="name" value="name" checked />
    <label for="name">이름순</label>
  </div>

  <div>
    <input type="radio" id="distance" name="distance" value="distance" />
    <label for="distance">거리순</label>
  </div>
  </div>`;
};

export default EatingPlaceRadioGroup;
