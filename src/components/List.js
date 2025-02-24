export const List = (props) => {
  const { children } = props;

  return `
    <div style="display:flex; flex-direction: column; gap: 4px; overflow-y: auto;">
      ${children && children()}
    </div>
  `;
};
