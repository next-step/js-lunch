import { createSelect } from "src/ui/select";
import { CATEGORIES } from "src/entities/category";

export const createCategoryFilter = ({ onChange }) => {
  return createSelect({
    name: "category",
    id: "category-filter",
    values: Object.keys(CATEGORIES),
    labels: CATEGORIES,
    onChange: (e) => onChange?.(e),
  });
};
