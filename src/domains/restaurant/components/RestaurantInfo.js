import { Icon } from '../../../components/Icon';
import { RestaurantFavorite } from './RestaurantFavorite';

export const RestaurantInfo = (props) => {
  const { id, icon, name, distance, description, checked, link } = props;

  return `
    <div
      style="display: flex; flex-direction: column; justify-content: flex-start; gap: 16px;"
    >
      ${Icon({ ...icon, size: 'lg' })}

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; justify-content: space-between;">
          <div>
            <h4 class="text-title">${name}</h4>
            <span class="text-subtitle" style="color: var(--primary-color);"
              >캠퍼스로부터 ${distance}분 거리</span
            >
          </div>

          ${RestaurantFavorite({ id, checked })}
        </div>
        <p class="text-body">${description}</p>
        ${link ? `<a href="${link}">${link}</a>` : ''}
      </div>
    </div>
  `;
};
