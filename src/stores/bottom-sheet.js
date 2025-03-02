import { createObserver } from '../utils';

export const bottomSheetStore = createObserver({
  // Bottom Sheet
  isBottomSheetOpen: false,
  bottomSheetLeftButtonText: null,
  bottomSheetRightButtonText: null,
  bottomSheetContent: null,
  bottomSheetConfirm: null,
  bottomSheetCancel: null,
});
