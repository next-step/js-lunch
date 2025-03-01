import { HelperLabel } from './HelperLabel';
import { Label } from './Label';

export const Textarea = (props) => {
  const {
    name,
    label,
    placeholder,
    helperText,
    rows = 4,
    required,
    fullWidth,
  } = props;

  const width = fullWidth ? 'width: 100%;' : '';
  const _placeholder = placeholder ? `placeholder: ${placeholder}` : '';

  return `
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${label ? Label({ name, content: label, required }) : ''}
      <textarea
        id=${name}
        name=${name}
        rows=${rows}
        style="${width} padding: 8px; border: 1px solid var(--grey-200); border-radius: 8px; font-size: 16px;"
        ${_placeholder}
      ></textarea>
      ${helperText ? HelperLabel({ content: helperText }) : ''}
    </div>
  `;
};
