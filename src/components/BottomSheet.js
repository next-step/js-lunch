import { bottomSheetStore } from '../stores/bottom-sheet';
import { addEvent } from '../utils';
import { Button } from './Button';

const Backdrop = () => {
  return `
    <div class="modal-backdrop"></div>
  `;
};

export const BottomSheet = () => {
  const {
    isBottomSheetOpen,
    bottomSheetContent,
    bottomSheetLeftButtonText,
    bottomSheetRightButtonText,
  } = bottomSheetStore.get();

  const open = isBottomSheetOpen ? 'modal--open' : '';

  return `
    <div class="modal ${open}">
      ${Backdrop()}
      <div class="modal-container" style="max-height: 90%;">
        ${bottomSheetContent}
        
        <div class="button-container" style="margin-top: 16px; gap: 8px;">
          ${Button({
            name: 'bottom-sheet-confirm',
            size: 'lg',
            variant: 'outlined',
            content: bottomSheetLeftButtonText ?? '확인',
          })}
          ${Button({
            name: 'bottom-sheet-cancel',
            size: 'lg',
            variant: 'primary',
            content: bottomSheetRightButtonText ?? '취소',
          })}
        </div>
      </div>
    </div>
  `;
};

addEvent('click', '#bottom-sheet-confirm', () => {
  bottomSheetStore.get().bottomSheetConfirm?.();

  bottomSheetStore.set({
    ...bottomSheetStore.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});

addEvent('click', '#bottom-sheet-cancel', () => {
  bottomSheetStore.get().bottomSheetCancel?.();

  bottomSheetStore.set({
    ...bottomSheetStore.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});
