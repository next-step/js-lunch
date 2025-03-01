import { store } from '../stores';
import { addEvent } from '../utils';
import { Button } from './Button';

const Backdrop = () => {
  return `
    <div class="modal-backdrop"></div>
  `;
};

export const BottomSheet = () => {
  const open = store.get().isBottomSheetOpen ? 'modal--open' : '';

  return `
    <div class="modal ${open}">
      ${Backdrop()}
      <div class="modal-container" style="max-height: 90%;">
        ${store.get().bottomSheetContent}
        
        <div class="button-container" style="margin-top: 16px; gap: 8px;">
          ${Button({
            name: 'bottom-sheet-confirm',
            size: 'lg',
            variant: 'outlined',
            content: store.get().bottomSheetLeftButtonText ?? '확인',
          })}
          ${Button({
            name: 'bottom-sheet-cancel',
            size: 'lg',
            variant: 'primary',
            content: store.get().bottomSheetRightButtonText ?? '취소',
          })}
        </div>
      </div>
    </div>
  `;
};

addEvent('click', '#bottom-sheet-confirm', () => {
  store.get().bottomSheetConfirm?.();

  store.set({
    ...store.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});

addEvent('click', '#bottom-sheet-cancel', () => {
  store.get().bottomSheetCancel?.();

  store.set({
    ...store.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: null,
    bottomSheetRightButtonText: null,
  });
});
