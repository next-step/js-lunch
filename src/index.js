addEventListener("load", () => {
  const restaurants = document.querySelectorAll(".restaurant-list .restaurant");
  const categoryFilter = document.getElementById("category-filter");

  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;
    restaurants.forEach((li) => {
      const image = li.querySelector("img.category-icon");
      if (selectedCategory === "전체" || image.alt === selectedCategory) {
        li.style.display = "";
      } else {
        li.style.display = "none";
      }
    });
  });
});
