import { Label } from './Label';

const SelectItem = (props) => {
  const { label, value, selected } = props;
  const _selected = selected ? 'selected' : '';

  return `
    <option value="${value}" ${_selected}>${label}</option>
  `;
};

const SelectContainer = (props) => {
  const { name, label, children, required, fullWidth } = props;

  const width = fullWidth ? 'width: 100%;' : '';

  return `
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${label ? Label({ name, content: label, required }) : ''}
      <select
        id="${name}"
        name="${name}"
        style="
          ${width}
          height: 44px;
          min-width: 125px;
          border: 1px solid #d0d5dd;
          border-radius: 8px;
          background: transparent;
          font-size: 16px;
        "
      >
        ${children()}
      </select>
    </div>
  `;
};

export const Select = Object.assign(SelectContainer, {
  Item: SelectItem,
});
