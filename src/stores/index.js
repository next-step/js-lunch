import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANTS,
} from '../domains/restaurant/constants';
import { createObserver } from '../utils';

export const store = createObserver({
  // Bottom Sheet
  isBottomSheetOpen: false,
  bottomSheetLeftButtonText: null,
  bottomSheetRightButtonText: null,
  bottomSheetContent: null,
  bottomSheetConfirm: null,
  bottomSheetCancel: null,

  // Domains
  category: RESTAURANT_CATEGORIES[0].value,
  sorting: RESTAURANT_SORTINGS[0].value,
  restaurants: RESTAURANTS,
});
