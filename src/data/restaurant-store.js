import { Store } from "./store.js";
import { RESTAURANTS_MOCK } from "./restaurant.js";

export class RestaurantStore extends Store {
  constructor(state) {
    super(state);
  }
}

const initialState = {
  initialRestaurants: RESTAURANTS_MOCK,
  restaurants: RESTAURANTS_MOCK,
};

export const restaurantStore = new RestaurantStore(initialState);
