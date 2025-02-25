import { CATEGORIES, SORTINGS } from '../constants';
import { RESTAURANTS } from '../domains/restaurant/constants';
import { createObserver } from '../utils';

export const store = createObserver({
  // Bottom Sheet
  isBottomSheetOpen: false,
  bottomSheetLeftButtonText: '취소',
  bottomSheetRightButtonText: '확인',
  bottomSheetContent: null,
  bottomSheetConfirm: null,
  bottomSheetCancel: null,

  // Domains
  category: CATEGORIES[0].value,
  sorting: SORTINGS[0].value,
  restaurants: RESTAURANTS,
});
