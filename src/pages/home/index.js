import { List } from '../../components/List';
import { Select } from '../../components/Select';
import { RESTAURANT_CATEGORIES, RESTAURANT_SORTINGS } from '../../constants';
import { RestaurantItem } from '../../domains/restaurant/components/RestaurantItem';
import { RESTAURANTS } from '../../domains/restaurant/constants';
import { store } from '../../stores';
import { addEvent } from '../../utils';

export const Home = () => {
  const { category, sorting, restaurants } = store.get();

  return `
    <section style="padding: 20px 16px; display: flex; flex-direction: column; flex: 1; gap: 16px;">
      <div style="width: 100%; display:flex; justify-content: space-between;">
        ${Select({
          name: 'category',
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

addEvent('change', `#category`, (event) => {
  event.preventDefault();
  const selectedCategory = event.target.value;

  store.set({
    ...store.get(),
    category: selectedCategory,
    restaurants: RESTAURANTS.filter(
      ({ category }) =>
        category === selectedCategory || selectedCategory === '전체',
    ),
  });
});

addEvent('change', `#sorting`, (event) => {
  event.preventDefault();
  const selectedSorting = event.target.value;

  const copiedRestaurants = [...store.get().restaurants];

  if (selectedSorting === 'name') {
    copiedRestaurants.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
    );
  }

  if (selectedSorting === 'distance') {
    copiedRestaurants.sort((a, b) => a.distance - b.distance);
  }

  store.set({
    ...store.get(),
    sorting: selectedSorting,
    restaurants: copiedRestaurants,
  });
});
