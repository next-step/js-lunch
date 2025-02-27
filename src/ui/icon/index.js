export const createIcon = ({ alt, src }) => {
  const icon = document.createElement("img");
  icon.src = src;
  icon.alt = alt;
  icon.classList.add("category-icon");
  return icon;
};
