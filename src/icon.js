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
      return "../templates/category-korean.png";

    case "중식":
      return "../templates/category-chinese.png";

    case "일식":
      return "../templates/category-japanese.png";

    case "양식 ":
      return "../templates/category-western.png";

    case "아시안":
      return "../templates/category-asian.png";

    default:
      return "../templates/category-etc.png";
  }
};
