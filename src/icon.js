export const makeIcon = (category) => {
  const iconContainer = document.createElement("div");

  iconContainer.setAttribute("class", "restaurant__category");

  const icon = document.createElement("img");

  iconContainer.appendChild(icon);

  icon.setAttribute("class", "category-icon");
  icon.setAttribute("src", setIconUrl(category));

  return iconContainer;
};

const setIconUrl = (category) => {
  switch (category) {
    case "한식":
      return "./assets/category-korean.png";

    case "중식":
      return "./assets/category-chinese.png";

    case "일식":
      return "./assets/category-japanese.png";

    case "양식 ":
      return "./assets/category-western.png";

    case "아시안":
      return "./assets/category-asian.png";

    default:
      return "./assets/category-etc.png";
  }
};
