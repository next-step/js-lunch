import { Button } from './Button';

const Backdrop = () => {
  return `
    <div class="modal-backdrop"></div>
  `;
};

export const BottomSheet = (props) => {
  const { children } = props;

  return `
    <div class="modal modal--open">
      ${Backdrop()}
      <div class="modal-container">
        ${children()}
        <div class="button-container" style="margin-top: 16px; gap: 8px;">
          ${Button({ size: 'lg', variant: 'outlined', content: '삭제하기' })}
          ${Button({ size: 'lg', variant: 'plain', content: '닫기' })}
        </div>
      </div>
    </div>
  `;
};
