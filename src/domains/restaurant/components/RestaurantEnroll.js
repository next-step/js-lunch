import { Select } from '../../../components/Select';
import { RESTAURANT_CATEGORIES } from '../../../constants';

export const RestaurantEnroll = () => {
  return `
    <div>
      <h4 class="text-subtitle" style="padding-bottom: 12px;">새로운 음식점</h4>

      <form>
          ${Select({
            name: 'category',
            label: '카테고리',
            fullWidth: true,
            children: () =>
              RESTAURANT_CATEGORIES.map((props) =>
                Select.Item({ ...props, selected: props.value === category }),
              ).join(''),
          })}
      </form>
    </div>
  `;
};
