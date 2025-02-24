export const Button = (props) => {
  const { size, content, variant } = props;

  const _size = (() => {
    if (size === 'lg') return 44;
    if (size === 'sm') return 30;
    return 36;
  })();

  const { border, background, color } = (() => {
    if (variant === 'outlined') {
      return {
        border: '1px solid var(--grey-300)',
        background: 'transparent',
        color: 'var(--grey-300)',
      };
    }

    return {
      border: 'none',
      background: 'var(--primary-color)',
      color: 'var(--grey-100)',
    };
  })();

  return `
    <button
      style="
        width: 100%;
        height: ${_size}px;
        border: ${border};
        background: ${background};
        color: ${color};
        border-radius: 8px;
        pointer: cursor;
      "
    >
      ${content}
    </button>
  `;
};
