import { createHeader } from "./components/header";
import { createSelect } from "./components/select";
import { createList } from "./components/list";

const createCategoryFilter = () => {
  return createSelect({
    name: "category",
    id: "category-filter",
    className: "restaurant-filter",
    values: ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"],
    labels: {
      전체: "전체",
      한식: "한식",
      중식: "중식",
      일식: "일식",
      양식: "양식",
      아시안: "아시안",
      기타: "기타",
    },
  });
};

const createSortingFilter = () => {
  return createSelect({
    name: "sorting",
    id: "sorting-filter",
    className: "restaurant-filter",
    values: ["name", "distance"],
    labels: {
      name: "이름순",
      distance: "거리순",
    },
  });
};

const createRestaurantFilter = () => {
  const categoryFilter = createCategoryFilter();
  const sortingFilter = createSortingFilter();

  const restaurantFilterContainer = document.createElement("section");
  restaurantFilterContainer.classList.add("restaurant-filter-container");
  restaurantFilterContainer.append(categoryFilter, sortingFilter);

  return restaurantFilterContainer;
};

const getRestaurantList = async () => {
  return await fetch("../__mock__/db.json").then((res) => res.json());
};

const createRestaurantList = (data) => {
  const restaurantListContainer = document.createElement("section");
  restaurantListContainer.classList.add("restaurant-list-container");

  const restaurantList = document.createElement("ul");
  restaurantList.classList.add("restaurant-list");
  restaurantListContainer.append(restaurantList);

  const restaurantElements = data.map((restaurant) => {
    const restaurantElement = document.createElement("li");
    restaurantElement.classList.add("restaurant");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("restaurant__category");
    restaurantElement.append(imageContainer);

    const categoryImage = document.createElement("img");
    const imagePaths = {
      한식: "category-korean.png",
      중식: "category-chinese.png",
      일식: "category-japanese.png",
      양식: "category-western.png",
      아시안: "category-asian.png",
      기타: "category-etc.png",
    };

    categoryImage.src = `../public/assets/${imagePaths[restaurant.category]}`;
    categoryImage.alt = restaurant.category;
    categoryImage.classList.add("category-icon");
    imageContainer.append(categoryImage);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("restaurant__info");
    restaurantElement.append(infoContainer);

    const name = document.createElement("h3");
    name.classList.add("restaurant__name", "text-subtitle");
    name.textContent = restaurant.name;
    infoContainer.append(name);

    const distance = document.createElement("span");
    distance.classList.add("restaurant__distance", "text-body");
    distance.textContent = `캠퍼스로부터 ${restaurant.distanceMinutes}분 내`;
    infoContainer.append(distance);

    const description = document.createElement("p");
    description.classList.add("restaurant__description", "text-body");
    description.textContent = restaurant.description;
    infoContainer.append(description);

    return restaurantElement;
  });

  restaurantList.append(...restaurantElements);
  return restaurantListContainer;
};

addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");

  app.prepend(createHeader());
  app.append(createRestaurantFilter());

  const restaurantList = await getRestaurantList();
  app.append(createRestaurantList(restaurantList));
});
