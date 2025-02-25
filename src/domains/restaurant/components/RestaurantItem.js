import { Icon } from '../../../components/Icon';
import { store } from '../../../stores';
import { addEvent } from '../../../utils';
import { RestaurantInfo } from './RestaurantInfo';

export const RestaurantItem = (props) => {
  const { icon, name, distance, description } = props;

  const json = JSON.stringify(props);

  return `
    <div
      class="restaurant"
      style="gap: 16px;"
      data-json='${json}'
    >
      ${Icon({ ...icon, size: 'lg' })}

      <div class="restaurant__info">
        <h4 class="restaurant__name">${name}</h4>
        <span class="restaurant__distance"
          >캠퍼스로부터 ${distance}분 거리</span
        >
        <p class="restaurant__description">${description}</p>
      </div>
    </div>
  `;
};

addEvent('click', '.restaurant', (event) => {
  const { json } = event.target.dataset;
  const props = JSON.parse(json);

  const handleDelete = () => {
    const removed = store
      .get()
      .restaurants.filter(({ name }) => props.name !== name);

    store.set({
      ...store.get(),
      restaurants: removed,
    });
  };

  store.set({
    ...store.get(),
    isBottomSheetOpen: true,
    bottomSheetLeftButtonText: '삭제하기',
    bottomSheetRightButtonText: '닫기',
    bottomSheetContent: RestaurantInfo(props),
    bottomSheetConfirm: handleDelete,
  });
});
