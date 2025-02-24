import { Icon } from '../../../components/Icon';

export const RestaurantItem = (props) => {
  const { icon, name, distance, description } = props;

  return `
    <div  class="restaurant" style="gap: 16px;">
      ${Icon({ ...icon, size: 'lg' })}

      <div class="restaurant__info">
        <h4 class="restaurant__name">${name}</h4>
        <span class="restaurant__distance">캠퍼스로부터 ${distance}분 거리</span>
        <p class="restaurant__description">${description}</p>
      </div>
    </div>
    
    `;
};
