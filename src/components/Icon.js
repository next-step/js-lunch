const ICON_SIZES = {
  xl: 36,
  lg: 32,
  md: 26,
  sm: 20,
  xs: 14,
};

export const Icon = (props) => {
  const { name, size = 'md' } = props;

  const _size = ICON_SIZES[size];

  return `
    <div 
      style="
        width: ${_size * 1.4}px; 
        height: ${_size * 1.4}px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 50%;
        background-color: var(--lighten-color);
      "
    >
      <img
        src="${import.meta.env.BASE_URL}assets/${name}.png"
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
