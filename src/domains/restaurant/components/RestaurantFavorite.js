import { Icon } from '../../../components/Icon';
import { addEvent } from '../../../utils';

export const RestaurantFavorite = (props) => {
  const { id, checked = false } = props;

  return `
    <div data-id='${id}'>
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

addEvent('click', '#favorite-icon-lined_icon', (event) => {
  console.log(event.target);
});

addEvent('click', '#favorite-icon-filled_icon', (event) => {
  console.log(event.target);
});
