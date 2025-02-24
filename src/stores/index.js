import { CATEGORIES, SORTINGS } from '../constants';
import { RESTAURANTS } from '../domains/restaurant/constants';
import { createObserver } from '../utils';

export const store = createObserver({
  category: CATEGORIES[0].value,
  sorting: SORTINGS[0].value,
  restaurants: RESTAURANTS,
});
