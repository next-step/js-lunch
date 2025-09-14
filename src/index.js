function main() {
  document
    .getElementById("category-filter")
    .addEventListener("change", changeCategory);

  document
    .getElementById("sorting-filter")
    .addEventListener("change", changeSorting);
}

function changeCategory() {
  const restaurants = document.querySelectorAll(".restaurant-list .restaurant");
  const categoryFilter = document.getElementById("category-filter");
  const selectedCategory = categoryFilter.value;
  restaurants.forEach((li) => {
    const image = li.querySelector("img.category-icon");
    if (selectedCategory === "전체" || image.alt === selectedCategory) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}

function changeSorting() {
  const restaurants = document.querySelectorAll(".restaurant-list .restaurant");
  const sortingFilter = document.getElementById("sorting-filter");

  const selectedSorting = sortingFilter.value;
  const items = Array.from(restaurants);

  if (selectedSorting === "name") {
    items.sort((a, b) => {
      const nameA = a.querySelector(".restaurant__name").textContent.trim();
      const nameB = b.querySelector(".restaurant__name").textContent.trim();
      return nameA.localeCompare(nameB, "ko");
    });
  } else {
    items.sort((a, b) => {
      const getMinutes = (li) => {
        const text =
          li.querySelector(".restaurant__distance")?.textContent || "";
        const match = text.match(/(\d+)\s*분/);
        return match ? parseInt(match[1], 10) : 9999;
      };
      return getMinutes(a) - getMinutes(b);
    });
  }

  items.forEach((li) =>
    document.querySelector(".restaurant-list").appendChild(li)
  );
}

addEventListener("load", main);
