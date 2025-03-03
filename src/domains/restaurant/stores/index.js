import { storage } from '../../../libs/storage';
import { createObserver } from '../../../utils';
import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANTS,
} from '../constants';

export const restaurantStore = createObserver(
  {
    // Domains
    category: storage.get('category', RESTAURANT_CATEGORIES[0].value),
    sorting: storage.get('sorting', RESTAURANT_SORTINGS[0].value),
    restaurants: storage.get('restaurants', RESTAURANTS),
  },
  { enableStorage: true },
);
