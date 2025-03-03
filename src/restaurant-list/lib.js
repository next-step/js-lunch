import { CATEGORIES } from "src/entities/category";

export const filterListByCategory = (list, category) => {
  return list.filter((item) =>
    category === "all" ? true : item.category === CATEGORIES[category]
  );
};

export const sortingList = (list, sorting) => {
  switch (sorting) {
    case "distance":
      return list.sort((a, b) => a.distanceMinutes - b.distanceMinutes);
    case "name":
    default: // 이름순 정렬 (기본값)
      return list.sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }
};
