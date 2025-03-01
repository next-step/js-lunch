export function createRestaurantFilter(
  selectedCategory = "전체",
  onCategoryChange,
  selectedSort = "name",
  onSortChange,
) {
  const section = document.createElement("section");
  section.className = "restaurant-filter-container";

  const categorySelect = document.createElement("select");
  categorySelect.name = "category";
  categorySelect.id = "category-filter";
  categorySelect.className = "restaurant-filter";
  categorySelect.value = selectedCategory;

  const categories = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  categorySelect.addEventListener("change", (e) => {
    onCategoryChange(e.target.value);
  });
  section.appendChild(categorySelect);

  const sortSelect = document.createElement("select");
  sortSelect.name = "sorting";
  sortSelect.id = "sorting-filter";
  sortSelect.className = "restaurant-filter";
  sortSelect.value = selectedSort;

  const sortOptions = [
    { value: "name", text: "이름순" },
    { value: "distance", text: "거리순" },
  ];
  sortOptions.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    sortSelect.appendChild(option);
  });

  sortSelect.addEventListener("change", (e) => {
    onSortChange(e.target.value);
  });
  section.appendChild(sortSelect);

  return section;
}
