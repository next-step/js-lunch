export function createModalContainer() {
  const modal = document.createElement("div");
  modal.className = "modal modal--open";

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  const container = document.createElement("div");
  container.className = "modal-container";

  modal.append(backdrop, container);
  document.body.appendChild(modal);

  return container;
}

export function closeExistingModal() {
  const prevModal = document.querySelector(".modal");
  if (prevModal) {
    prevModal.remove();
    return true;
  }
  return false;
}
