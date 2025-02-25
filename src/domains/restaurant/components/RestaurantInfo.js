import { Icon } from '../../../components/Icon';

export const RestaurantInfo = (props) => {
  const { icon, name, distance, description } = props;

  return `
    <div style="display: flex; flex-direction: column; justify-content: flex-start; gap: 16px;">
      ${Icon({ ...icon, size: 'lg' })}

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <h4 class="text-title">${name}</h4>
        <span class="text-subtitle" style="color: var(--primary-color);">캠퍼스로부터 ${distance}분 거리</span>
        <p class="text-body">${description}</p>
      </div>
    </div>
  `;
};
