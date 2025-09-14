import { Store } from "./store.js";

export class CategoryFilterStore extends Store {
  constructor(state) {
    super(state);
  }
}

const initialState = {
  options: [
    {
      label: "전체",
      value: "all",
    },
    {
      label: "한식",
      value: "korean",
    },
    {
      label: "중식",
      value: "chinese",
    },
    {
      label: "일식",
      value: "japanese",
    },
    {
      label: "양식",
      value: "western",
    },
    {
      label: "아시안",
      value: "asian",
    },
    {
      label: "기타",
      value: "etc",
    },
  ],
  value: "all",
};

export const categoryFilterStore = new CategoryFilterStore(initialState);
