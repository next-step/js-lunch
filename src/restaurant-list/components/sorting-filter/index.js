import { createSelect } from "src/ui/select";

export const SORTING = {
  name: "이름순",
  distance: "거리순",
};

export const createSortingFilter = () => {
  return createSelect({
    name: "sorting",
    id: "sorting-filter",
    values: Object.keys(SORTING),
    labels: SORTING,
  });
};
