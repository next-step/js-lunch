export const targetNode = document.querySelector("#app");

export const config = { attributes: true, childList: true, subtree: true };

const checkMutationChildList = (mutation) => {
  const isDrawer = mutation.target.querySelector(".drawer-button");
  if (isDrawer) {
    const drawerStateEvent = new CustomEvent("drawer-state", {
      detail: {
        drawerState: isDrawer.dataset.drawerState,
      },
    });

    const drawerElement = document.querySelector(".eating-place-drawer");
    drawerElement.dispatchEvent(drawerStateEvent);
  }

  const isRadioBox = mutation.target.querySelector(
    ".eating-place-radio-group input[checked]",
  );
  if (isRadioBox) {
    const radioEvent = new CustomEvent("list-state", {
      detail: {
        radioState: isRadioBox.value,
      },
    });

    const listElement = document.querySelector(".eating-place-list");
    listElement.dispatchEvent(radioEvent);
  }
};

const callback = (mutationList, observer) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      checkMutationChildList(mutation, observer);
    }

    if (mutation.type === "attributes") {
      console.log(mutation.target);
    }
  }
};

export const observer = new MutationObserver(callback);
