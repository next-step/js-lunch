import { sessionStorageUtil } from '../../../libs/storage';
import { createObserver } from '../../../utils';
import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANTS,
} from '../constants';

export const restaurantStore = createObserver(
  {
    // Domains
    category: sessionStorageUtil.get(
      'category',
      RESTAURANT_CATEGORIES[0].value,
    ),
    sorting: sessionStorageUtil.get('sorting', RESTAURANT_SORTINGS[0].value),
    restaurants: sessionStorageUtil.get('restaurants', RESTAURANTS),
    favorites: sessionStorageUtil.get('favorites', []),
  },
  { enableStorage: true },
);
