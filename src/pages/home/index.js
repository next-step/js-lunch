import { List } from '../../components/List';
import { Select } from '../../components/Select';
import { RestaurantItem } from '../../domains/restaurant/components/RestaurantItem';
import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANTS,
} from '../../domains/restaurant/constants';
import { restaurantStore } from '../../domains/restaurant/stores';
import { addEvent } from '../../utils';

export const Home = () => {
  const { category, sorting, restaurants } = restaurantStore.get();

  return `
    <section id="home-container" style="padding: 20px 16px; display: flex; flex-direction: column; flex: 1; gap: 16px;">
      <div style="width: 100%; display:flex; justify-content: space-between;">
        ${Select({
          name: 'category_filter',
          children: () =>
            RESTAURANT_CATEGORIES.map((props) =>
              Select.Item({ ...props, selected: props.value === category }),
            ).join(''),
        })}
        ${Select({
          name: 'sorting',
          children: () =>
            RESTAURANT_SORTINGS.map((props) =>
              Select.Item({ ...props, selected: props.value === sorting }),
            ).join(''),
        })}        
      </div>
      
      ${List({
        children: () =>
          restaurants.map((props) => RestaurantItem(props)).join(''),
      })}
    </section>
  `;
};

const render = () => {
  const oldContainer = document.querySelector('#home-container');
  if (!oldContainer) return;

  const newContainer = document.createElement('div');
  newContainer.id = 'home-container';
  newContainer.innerHTML = Home();

  oldContainer.replaceWith(newContainer);
};

restaurantStore.subscribe(render);

addEvent('change', `#category_filter`, (event) => {
  event.preventDefault();
  const selectedCategory = event.target.value;

  restaurantStore.set({
    ...restaurantStore.get(),
    category: selectedCategory,
    restaurants: RESTAURANTS.filter(
      ({ category }) =>
        category === selectedCategory || selectedCategory === 'ALL',
    ),
  });
});

addEvent('change', `#sorting`, (event) => {
  event.preventDefault();
  const selectedSorting = event.target.value;

  const copiedRestaurants = [...restaurantStore.get().restaurants];

  if (selectedSorting === 'name') {
    copiedRestaurants.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
    );
  }

  if (selectedSorting === 'distance') {
    copiedRestaurants.sort((a, b) => a.distance - b.distance);
  }

  restaurantStore.set({
    ...restaurantStore.get(),
    sorting: selectedSorting,
    restaurants: copiedRestaurants,
  });
});
