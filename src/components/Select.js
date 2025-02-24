const SelectItem = (props) => {
  const { label, value, selected } = props;
  const _selected = selected ? 'selected' : '';

  return `
    <option value="${value}" ${_selected}>${label}</option>
  `;
};

const SelectContainer = (props) => {
  const { name, children } = props;

  return `
    <select
      id="${name}"
      name="${name}"
      style="
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
  `;
};

export const Select = Object.assign(SelectContainer, {
  Item: SelectItem,
});
