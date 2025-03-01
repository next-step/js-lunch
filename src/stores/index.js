import { createObserver } from '../utils';

export const globalStore = createObserver({
  // Bottom Sheet
  isBottomSheetOpen: false,
  bottomSheetLeftButtonText: null,
  bottomSheetRightButtonText: null,
  bottomSheetContent: null,
  bottomSheetConfirm: null,
  bottomSheetCancel: null,
});
