import {
  createFormItem,
  createFormItemHelpText,
  createFormItemInput,
  createFormItemLabel,
  createFormItemSelect,
} from "./components/form-item.js";
import { createButtonContainer } from "./components/button-container.js";
import {
  getRestaurantList,
  initRestaurantList,
  saveRestaurantList,
} from "./services/restaurant-service.js";
import { createFavoriteButton } from "./components/favorite-button.js";
import {
  createRestaurantCategoryIcon,
  createRestaurantDescription,
  createRestaurantLink,
  createRestaurantTitle,
} from "./components/restaurant-item.js";
import {
  closeExistingModal,
  createModalContainer,
} from "./components/modal.js";
import { getRestaurantCategoryIcon } from "./utils/restaurant-utils.js";

const addRestaurant = () => {
  if (!checkRequiredForms()) {
    return;
  }

  const modal = document.querySelector(".modal");
  const categorySelect = document.querySelector(
    '.modal select[name="category"]'
  );
  const nameInput = document.querySelector('.modal input[name="name"]');
  const distanceSelect = document.querySelector(
    '.modal select[name="distance"]'
  );
  const description = document.querySelector(
    '.modal textarea[name="description"]'
  );
  const newRestaurant = {
    icon: getRestaurantCategoryIcon(categorySelect.value),
    category: categorySelect.value,
    name: nameInput.value,
    distance: parseInt(distanceSelect.value),
    description: description.value,
  };

  const restaurantList = getRestaurantList();
  restaurantList.push(newRestaurant);
  saveRestaurantList(restaurantList);

  renderList(restaurantList);
  modal.remove();
};

const removeRestaurant = (restaurantName) => {
  const removedRestaurantList = getRestaurantList().filter(
    (restaurant) => restaurant.name !== restaurantName
  );
  saveRestaurantList(removedRestaurantList);
  renderList(removedRestaurantList);
};

function main() {
  document
    .getElementById("category-filter")
    .addEventListener("change", changeCategory);

  document
    .getElementById("sorting-filter")
    .addEventListener("change", changeSorting);

  document
    .querySelector(".gnb__add-button")
    .addEventListener("click", showNewRestaurantModal);
}

function changeCategory() {
  const selectedCategory = document.getElementById("category-filter").value;
  const restaurantList = getRestaurantList();
  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurantList
      : restaurantList.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  renderList(filteredRestaurants);
}

function changeSorting() {
  const selectedSorting = document.getElementById("sorting-filter").value;
  const sortedRestaurants = [...getRestaurantList()];
  if (selectedSorting === "name") {
    sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSorting === "distance") {
    sortedRestaurants.sort((a, b) => a.distance - b.distance);
  } else {
    sortedRestaurants;
  }
  renderList(sortedRestaurants);
}

function renderList(list) {
  const activeTab = document.querySelector(".tab-content.active");
  const restaurantList = activeTab.id.includes("favorite")
    ? list.filter((item) => item.isFavorite === true)
    : list;

  const ul = activeTab.querySelector(".restaurant-list");
  ul.innerHTML = "";

  const fragment = document.createDocumentFragment();

  restaurantList.forEach((restaurant) => {
    const li = document.createElement("li");
    li.className = "restaurant";
    li.addEventListener("click", showRestaurantDetailModal);

    const categoryIcon = createRestaurantCategoryIcon({
      icon: restaurant.icon,
      category: restaurant.category,
    });
    li.appendChild(categoryIcon);

    const infoDiv = document.createElement("div");
    infoDiv.className = "restaurant__info";

    const header = document.createElement("div");
    header.className = "restaurant__header";

    const title = createRestaurantTitle({
      name: restaurant.name,
      distance: restaurant.distance,
    });

    const favoriteButton = createFavoriteButton({
      restaurant: restaurant,
      onToggle: () => toggleFavorite(restaurant.name),
    });

    const description = createRestaurantDescription({
      showFullDescription: false,
      description: restaurant.description,
    });

    li.dataset.icon = restaurant.icon;
    li.dataset.category = restaurant.category;
    li.dataset.name = restaurant.name;
    li.dataset.distance = restaurant.distance;
    li.dataset.description = restaurant.description;
    li.dataset.link = restaurant.link;
    li.dataset.isFavorite = restaurant.isFavorite;

    header.append(title, favoriteButton);
    infoDiv.append(header, description);
    li.appendChild(infoDiv);

    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
}

function createCategoryItem() {
  const category = createFormItem({
    required: true,
  });
  const categoryLabel = createFormItemLabel("카테고리");
  const categorySelect = createFormItemSelect({
    category: "category",
    options: ["선택해주세요", "한식", "중식", "일식", "양식", "아시안", "기타"],
  });
  categorySelect.name = "category";
  category.append(categoryLabel, categorySelect);
  return category;
}

function createNameItem() {
  const name = createFormItem({
    required: true,
  });
  const nameLabel = createFormItemLabel("이름");
  const nameInput = createFormItemInput({
    name: "name",
    type: "text",
  });
  name.append(nameLabel, nameInput);
  return name;
}

function createDistanceItem() {
  const distance = createFormItem({
    required: true,
  });
  const distanceLabel = createFormItemLabel("거리(도보 이동 시간)");
  const distanceSelect = createFormItemSelect({
    name: "distance",
    options: ["선택해주세요", "5", "10", "15", "20", "30"],
  });
  distance.append(distanceLabel, distanceSelect);
  return distance;
}

function createDescriptionItem() {
  const description = createFormItem();
  const descriptionLabel = createFormItemLabel("설명");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.name = "description";
  const descriptionHelpText = createFormItemHelpText(
    "메뉴 등 추가 정보를 입력해 주세요."
  );
  description.append(
    descriptionLabel,
    descriptionTextArea,
    descriptionHelpText
  );
  return description;
}

function createLinkItem() {
  const link = createFormItem();
  const linkLabel = createFormItemLabel("참고 링크");
  const linkInput = createFormItemInput({
    name: "link",
    type: "url",
  });
  const linkHelpText = createFormItemHelpText(
    "매장 정보를 확인할 수 있는 링크를 입력해 주세요."
  );
  link.append(linkLabel, linkInput, linkHelpText);
  return link;
}

function showNewRestaurantModal() {
  if (closeExistingModal()) {
    return;
  }

  const container = createModalContainer();

  const title = document.createElement("h3");
  title.className = "modal-title text-subtitle";
  title.textContent = "새로운 음식점";

  const category = createCategoryItem();
  const name = createNameItem();
  const distance = createDistanceItem();
  const description = createDescriptionItem();
  const link = createLinkItem();

  const buttonContainer = createButtonContainer({
    negative: { onClick: closeExistingModal },
    positive: { text: "추가하기", onClick: addRestaurant },
  });

  container.append(
    title,
    category,
    name,
    distance,
    description,
    link,
    buttonContainer
  );
}

function checkRequiredForms() {
  const container = document.querySelector(".modal-container");
  const requiredFormItems = container.querySelectorAll(".form-item--required");

  for (const requiredFormItem of requiredFormItems) {
    const requiredElements =
      requiredFormItem.querySelectorAll("input , select");

    for (const requiredElement of requiredElements) {
      if (!requiredElement.value.trim()) {
        alert("카테고리, 이름, 거리가 모두 입력되어야 합니다.");
        return false;
      }
    }
  }

  return true;
}

function showRestaurantDetailModal(event) {
  if (closeExistingModal()) {
    return;
  }
  const target = event.currentTarget;
  const restaurant = {
    icon: target.dataset.icon,
    category: target.dataset.category,
    name: target.dataset.name,
    distance: target.dataset.distance,
    description: target.dataset.description,
    link: target.dataset.link,
    isFavorite: target.dataset.isFavorite === "true",
  };

  const container = createModalContainer();

  const detailContainer = document.createElement("div");
  detailContainer.className = "restaurant__detail";

  const categoryIcon = createRestaurantCategoryIcon({
    icon: restaurant.icon,
    category: restaurant.category,
  });

  const header = document.createElement("div");
  header.className = "restaurant__header";

  const favoriteButton = createFavoriteButton({
    restaurant: restaurant,
    onToggle: () => toggleFavorite(restaurant.name),
  });

  const infoDiv = document.createElement("div");
  infoDiv.className = "restaurant__info";

  const title = createRestaurantTitle({
    name: restaurant.name,
    distance: restaurant.distance,
  });

  const description = createRestaurantDescription({
    showFullDescription: true,
    description: restaurant.description,
  });

  const link = createRestaurantLink(restaurant.link);

  const buttonContainer = createButtonContainer({
    negative: {
      text: "삭제하기",
      onClick: () => {
        removeRestaurant(restaurant.name);
        closeExistingModal();
      },
    },
    positive: {
      text: "닫기",
      onClick: closeExistingModal,
    },
  });

  header.append(categoryIcon, favoriteButton);
  infoDiv.append(title, description, link);
  detailContainer.append(header, infoDiv);
  container.append(detailContainer, buttonContainer);
}

function toggleFavorite(restaurantName) {
  const restaurantList = getRestaurantList();
  const index = restaurantList.findIndex(
    (item) => item.name === restaurantName
  );

  if (index === -1) {
    return;
  }

  restaurantList[index].isFavorite = !restaurantList[index].isFavorite;
  saveRestaurantList(restaurantList);

  renderList(restaurantList);
}

function createTabContents() {
  const tabs = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
      renderList(getRestaurantList());
    });
  });
}

addEventListener("load", main);

addEventListener("DOMContentLoaded", () => {
  initRestaurantList();
  createTabContents();
  renderList(getRestaurantList());
});
