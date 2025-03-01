import { createSelect } from "src/ui/select";
import { CATEGORIES } from "src/entities/category";

const FILTER_OPTIONS = {
  all: "전체",
  ...CATEGORIES,
};

export const createCategoryFilter = ({ onChange }) => {
  return createSelect({
    name: "category",
    id: "category-filter",
    values: [...Object.keys(FILTER_OPTIONS)],
    labels: FILTER_OPTIONS,
    onChange: (e) => onChange?.(e),
  });
};
