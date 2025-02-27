import { makeEatingDetailInfo, toggleElement } from "../../shared/util";

const EatingPlaceDetailDrawer = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-detail-drawer");

  const handleDelete = () => {
    toggleElement(divElement);
  };

  const handleClose = () => {
    toggleElement(divElement);
  };

  const html = /* html */ `
       <div class="eating-place-drawer-backdrop"></div>
       <div class="eating-place-drawer-content">
        ${makeEatingDetailInfo({})}
      </div>
        <div>
          <button class="remove">
            삭제하기
          </button>                 
          <button class="close">
            닫기
          </button>
        </div>
     `;

  divElement.innerHTML = html;
  container.appendChild(divElement);

  const deleteButton = container.querySelector(
    ".eating-place-detail-drawer .remove",
  );
  deleteButton.addEventListener("click", handleDelete);

  const closeButton = container.querySelector(
    ".eating-place-detail-drawer .close",
  );
  closeButton.addEventListener("click", handleClose);

  return container;
};

export default EatingPlaceDetailDrawer;
