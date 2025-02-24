export const Icon = (props) => {
  const { name, size } = props;

  const _size = (() => {
    if (size === 'xl') return 36;
    if (size === 'lg') return 32;
    if (size === 'sm') return 20;
    if (size === 'xs') return 14;

    return 26;
  })();

  return `
    <div 
      style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 50%;
        background-color: var(--lighten-color);
      "
    >
      <img
        src="/assets/${name}.png"
        alt="${name} icon"
        style="
          width: ${_size}px; 
          height: ${_size}px;
          display: block;
        "
      />
    </div>
  `;
};
