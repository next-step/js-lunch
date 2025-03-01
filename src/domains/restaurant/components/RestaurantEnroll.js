import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Textarea } from '../../../components/Textarea';
import { RESTAURANT_CATEGORIES, RESTAURANT_DISTANCES } from '../constants';

export const RestaurantEnroll = () => {
  return `
    <div>
      <h4 class="text-subtitle" style="padding-bottom: 12px;">새로운 음식점</h4>

      <form id="restaurant_enroll_form" style="display: flex; flex-direction: column; gap: 24px;">
          ${Select({
            name: 'category',
            label: '카테고리',
            required: true,
            fullWidth: true,
            children: () =>
              RESTAURANT_CATEGORIES.map((props) =>
                Select.Item({ ...props, selected: props.value === category }),
              ).join(''),
          })}

          ${Input({
            name: 'name',
            label: '이름',
            required: true,
            fullWidth: true,
          })}

          ${Select({
            name: 'direction',
            label: '거리(도보 이동 시간)',
            required: true,
            fullWidth: true,
            children: () =>
              RESTAURANT_DISTANCES.map((props) =>
                Select.Item({ ...props, selected: props.value === category }),
              ).join(''),
          })}

          ${Textarea({
            name: 'description',
            label: '설명',
            fullWidth: true,
            helperText: '메뉴 등 추가 정보를 입력해 주세요.',
          })}

          ${Input({
            name: 'link',
            label: '참고 링크',
            fullWidth: true,
            helperText: '매장 정보를 확인할 수 있는 링크를 입력해 주세요.',
          })}
      </form>
    </div>
  `;
};
