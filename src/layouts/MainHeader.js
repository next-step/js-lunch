import { Icon } from '../components/Icon';
import { RestaurantEnroll } from '../domains/restaurant/components/RestaurantEnroll';
import { store } from '../stores';
import { addEvent } from '../utils';

export const MainHeader = () => {
  return `
    <header style="padding: 16px 12px; text-align:center; background-color: var(--primary-color); display: flex; justify-content: space-between; align-items: center;">
      <h1 class="text-title" style="color: var(--grey-100)">점심에는 뭐 먹지</h1>
      ${Icon({ name: 'add-button', size: 'lg', removeBackground: true })}
    </header>
  `;
};

addEvent('click', `#add-button_icon`, (event) => {
  event.preventDefault();

  store.set({
    ...store.get(),
    isBottomSheetOpen: true,
    bottomSheetLeftButtonText: '취소',
    bottomSheetRightButtonText: '등록하기',
    bottomSheetContent: RestaurantEnroll(),
    bottomSheetConfirm: null,
  });
});
