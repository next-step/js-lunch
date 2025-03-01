import { createObserver } from '../../../utils';
import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANTS,
} from '../constants';

export const restaurantStore = createObserver({
  // Domains
  category: RESTAURANT_CATEGORIES[0].value,
  sorting: RESTAURANT_SORTINGS[0].value,
  restaurants: RESTAURANTS,
});
