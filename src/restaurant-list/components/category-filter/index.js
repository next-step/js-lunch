import { createSelect } from "src/ui/select";
import { CATEGORIES } from "src/entities/category";

export const createCategoryFilter = () => {
  return createSelect({
    name: "category",
    id: "category-filter",
    values: Object.keys(CATEGORIES),
    labels: CATEGORIES,
  });
};
