import { Icon } from '../components/Icon';
import { RestaurantEnroll } from '../domains/restaurant/components/RestaurantEnroll';
import { RESTAURANT_CATEGORIES } from '../domains/restaurant/constants';
import { restaurantStore } from '../domains/restaurant/stores';
import { validateRestaurantEnrollForm } from '../domains/restaurant/utils';
import { globalStore } from '../stores';
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

  const handleSubmit = async () => {
    const targetForm = document.querySelector('#restaurant_enroll_form');

    const formValues = {};
    new FormData(targetForm).forEach((value, key) => {
      formValues[key] = value;
    });

    try {
      await validateRestaurantEnrollForm(formValues);

      restaurantStore.set({
        ...restaurantStore.get(),
        restaurants: [
          ...restaurantStore.get().restaurants,
          {
            ...formValues,
            ...RESTAURANT_CATEGORIES.filter(
              ({ value }) => formValues.category === value,
            )[0],
          },
        ],
      });
    } catch ({ reason }) {
      alert(reason);
    }
  };

  globalStore.set({
    ...globalStore.get(),
    isBottomSheetOpen: true,
    bottomSheetLeftButtonText: '취소',
    bottomSheetRightButtonText: '등록하기',
    bottomSheetContent: RestaurantEnroll(),
    bottomSheetCancel: handleSubmit,
  });
});
