import { Icon } from '../../../components/Icon';
import { addEvent } from '../../../utils';
import { restaurantStore } from '../stores';

export const RestaurantFavorite = (props) => {
  const { id, checked = false } = props;

  return `
    <div id="favorite-icon-container" data-id="${id}">
      ${
        checked
          ? Icon({
              name: 'favorite-icon-filled',
              size: 'md',
              removeBackground: true,
            })
          : ''
      }
      ${
        !checked
          ? Icon({
              name: 'favorite-icon-lined',
              size: 'md',
              removeBackground: true,
            })
          : ''
      }
    </div>
  `;
};

addEvent('click', '#favorite-icon-container', (event) => {
  const iconContainerElement = event.target.parentElement.parentElement;

  const { id } = iconContainerElement.dataset;
  const { favorites } = restaurantStore.get();

  const isChecked = favorites.some((favoriteId) => favoriteId === id);
  const updatedFavorites = isChecked
    ? favorites.filter((favoriteId) => favoriteId !== id)
    : [...favorites, id];

  restaurantStore.set({
    ...restaurantStore.get(),
    favorites: updatedFavorites,
  });
});
