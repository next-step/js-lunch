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
      <div class="modal-container">
        ${store.get().bottomSheetContent}
        
        <div class="button-container" style="margin-top: 16px; gap: 8px;">
          ${Button({
            name: 'bottom-sheet-confirm',
            size: 'lg',
            variant: 'outlined',
            content: store.get().bottomSheetLeftButtonText,
          })}
          ${Button({
            name: 'bottom-sheet-cancel',
            size: 'lg',
            variant: 'plain',
            content: store.get().bottomSheetRightButtonText,
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
    bottomSheetLeftButtonText: '취소',
    bottomSheetRightButtonText: '확인',
  });
});

addEvent('click', '#bottom-sheet-cancel', () => {
  store.get().bottomSheetCancel?.();

  store.set({
    ...store.get(),
    isBottomSheetOpen: false,
    bottomSheetLeftButtonText: '취소',
    bottomSheetRightButtonText: '확인',
  });
});
