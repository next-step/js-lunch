import { globalStore } from '../stores';
import { addEvent } from '../utils';
import { Button } from './Button';

const Backdrop = () => {
  return `
    <div class="modal-backdrop"></div>
  `;
};

export const BottomSheet = () => {
  const open = globalStore.get().isBottomSheetOpen ? 'modal--open' : '';

  return `
    <div class="modal ${open}">
      ${Backdrop()}
      <div class="modal-container" style="max-height: 90%;">
        ${globalStore.get().bottomSheetContent}
        
        <div class="button-container" style="margin-top: 16px; gap: 8px;">
          ${Button({
            name: 'bottom-sheet-confirm',
            size: 'lg',
            variant: 'outlined',
            content: globalStore.get().bottomSheetLeftButtonText ?? '확인',
          })}
          ${Button({
            name: 'bottom-sheet-cancel',
            size: 'lg',
            variant: 'primary',
            content: globalStore.get().bottomSheetRightButtonText ?? '취소',
          })}
        </div>
      </div>
    </div>
  `;
};

addEvent('click', '#bottom-sheet-confirm', () => {
  globalStore.get().bottomSheetConfirm?.();

  globalStore.set({
    ...globalStore.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});

addEvent('click', '#bottom-sheet-cancel', () => {
  globalStore.get().bottomSheetCancel?.();

  globalStore.set({
    ...globalStore.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});
