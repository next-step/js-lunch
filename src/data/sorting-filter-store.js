import { Store } from "./store.js";

export class SortingFilterStore extends Store {
  constructor(state) {
    super(state);
  }
}

const initialState = {
  options: [
    {
      label: "이름순",
      value: "name",
    },
    {
      label: "거리순",
      value: "distance",
    },
  ],
  value: "name",
};

export const sortingFilterStore = new SortingFilterStore(initialState);
