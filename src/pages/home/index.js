import { List } from '../../components/List';
import { Select } from '../../components/Select';
import { Tabs } from '../../components/Tabs';
import { RestaurantItem } from '../../domains/restaurant/components/RestaurantItem';
import {
  RESTAURANT_CATEGORIES,
  RESTAURANT_SORTINGS,
  RESTAURANT_TABS,
} from '../../domains/restaurant/constants';
import { restaurantStore } from '../../domains/restaurant/stores';
import { addEvent } from '../../utils';

export const Home = () => {
  const { category, sorting, filteredRestaurants, activeTab } =
    restaurantStore.get();

  return `
    <section id="home-container" style="padding: 20px 16px; display: flex; flex-direction: column; flex: 1; gap: 16px;">
      ${Tabs({
        tabs: RESTAURANT_TABS,
        activeTab,
      })}

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
          filteredRestaurants.map((props) => RestaurantItem(props)).join(''),
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

// Events

addEvent('click', '.tab_button', (event) => {
  const { value } = event.target.dataset;
  const previousStore = restaurantStore.get();

  if (previousStore.activeTab === value) return;

  const filteredRestaurants = (() => {
    if (value === 'FAVORITE_TAB')
      return previousStore.restaurants.filter(({ id }) =>
        previousStore.favorites.includes(id),
      );

    return previousStore.restaurants;
  })();

  restaurantStore.set({
    ...previousStore,
    activeTab: value,
    filteredRestaurants,
  });
});

addEvent('change', `#category_filter`, (event) => {
  event.preventDefault();
  const selectedCategory = event.target.value;

  const previousStore = restaurantStore.get();

  restaurantStore.set({
    ...restaurantStore.get(),
    category: selectedCategory,
    filteredRestaurants: previousStore.restaurants.filter(
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
