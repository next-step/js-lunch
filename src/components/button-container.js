export function createButtonContainer({
  negative: {
    text: negativeText = "취소하기",
    onClick: onNegativeClick = () => {},
  },
  positive: {
    text: positiveText = "확인하기",
    onClick: onPositiveClick = () => {},
  },
}) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  const negativeButton = document.createElement("button");
  negativeButton.className = "button";
  negativeButton.classList.add("button--secondary");
  negativeButton.textContent = negativeText;
  const positiveButton = document.createElement("button");
  positiveButton.className = "button";
  positiveButton.classList.add("button--primary");
  positiveButton.textContent = positiveText;

  negativeButton.addEventListener("click", onNegativeClick);
  positiveButton.addEventListener("click", onPositiveClick);

  buttonContainer.append(negativeButton, positiveButton);
  return buttonContainer;
}
