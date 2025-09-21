const restaurantData = [
  {
    icon: "category-etc.png",
    category: "기타",
    name: "도스타코스 선릉점",
    distance: 5,
    description: "맥시칸 캐주얼 그릴",
  },
  {
    icon: "category-western.png",
    category: "양식",
    name: "이태리키친",
    distance: 20,
    description: "늘 변화를 추구하는 이태리키친입니다.",
  },
  {
    icon: "category-japanese.png",
    category: "일식",
    name: "잇쇼우",
    distance: 10,
    description:
      "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은\n정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는\n잇쇼우는 고객 한분 한분께 최선을 다하겠습니다",
  },
  {
    icon: "category-chinese.png",
    category: "중식",
    name: "친친",
    distance: 5,
    description:
      "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과\n정성으로 정통 중식의 세계를 펼쳐갑니다",
  },
  {
    icon: "category-korean.png",
    category: "한식",
    name: "피앙콩할머니",
    distance: 10,
    description:
      "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩\n할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은\n평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선\n맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은\n건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만,\n할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의\n역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은\n만큼 덜어 먹을 수 있게 준비돼 있다.",
  },
  {
    icon: "category-asian.png",
    category: "아시안",
    name: "호아빈 삼성점",
    distance: 15,
    description: "푸짐한 양에 국물이 일품인 쌀국수",
  },
];

function main() {
  renderList(restaurantData);

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
  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurantData
      : restaurantData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  renderList(filteredRestaurants);
}

function changeSorting() {
  const selectedSorting = document.getElementById("sorting-filter").value;
  const sortedRestaurants = [...restaurantData];
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
  const ul = document.querySelector(".restaurant-list");
  ul.innerHTML = "";

  const fragment = document.createDocumentFragment();

  list.forEach((restaurant) => {
    const li = document.createElement("li");
    li.className = "restaurant";

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "restaurant__category";
    const image = document.createElement("img");
    image.className = "category-icon";
    image.src = `/js-lunch/assets/${restaurant.icon}`;
    image.alt = restaurant.category;
    categoryDiv.appendChild(image);
    li.appendChild(categoryDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "restaurant__info";

    const name = document.createElement("h3");
    name.className = "restaurant__name text-subtitle";
    name.textContent = restaurant.name;

    const distance = document.createElement("span");
    distance.className = "restaurant__distance text-body";
    distance.textContent = `캠퍼스부터 ${restaurant.distance}분 내`;

    const description = document.createElement("p");
    description.className = "restaurant__description text-body";
    description.textContent = restaurant.description;

    infoDiv.appendChild(name);
    infoDiv.appendChild(distance);
    infoDiv.appendChild(description);
    li.appendChild(infoDiv);

    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
}

function showNewRestaurantModal() {
  const prevModal = document.querySelector(".modal");
  if (prevModal) {
    prevModal.remove();
    return;
  }
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.classList.add("modal--open");

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  const container = document.createElement("div");
  container.className = "modal-container";

  const title = document.createElement("h3");
  title.className = "modal-title text-subtitle";
  title.textContent = "새로운 음식점";

  const category = document.createElement("div");
  category.className = "form-item";
  category.classList.add("form-item--required");
  const categoryLabel = document.createElement("label");
  categoryLabel.id = "category-label";
  categoryLabel.textContent = "카테고리";
  categoryLabel.classList.add("text-caption");
  const categorySelect = document.createElement("select");
  ["선택해주세요", "한식", "중식", "일식", "양식", "아시안", "기타"].forEach(
    (category, index) => {
      const value = index === 0 ? "" : category;
      const option = document.createElement("option");
      option.value = value;
      option.textContent = category;
      categorySelect.appendChild(option);
    }
  );
  category.append(categoryLabel, categorySelect);

  const name = document.createElement("div");
  name.className = "form-item";
  name.classList.add("form-item--required");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "이름";
  nameLabel.classList.add("text-caption");
  const nameInput = document.createElement("input");
  nameInput.name = "name";
  nameInput.type = "text";
  name.append(nameLabel, nameInput);

  const distance = document.createElement("div");
  distance.className = "form-item";
  distance.classList.add("form-item--required");
  const distanceLabel = document.createElement("label");
  distanceLabel.textContent = "거리(도보 이동 시간)";
  distanceLabel.classList.add("text-caption");
  const distanceSelect = document.createElement("select");
  ["선택해주세요", "5", "10", "15", "20", "30"].forEach((distance, index) => {
    const value = index === 0 ? "" : distance;
    const option = document.createElement("option");
    option.value = value;
    option.textContent = distance;
    distanceSelect.appendChild(option);
  });
  distance.append(distanceLabel, distanceSelect);

  container.append(title, category, name, distance);
  modal.append(backdrop, container);
  document.body.appendChild(modal);
}

addEventListener("load", main);
