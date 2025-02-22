export const Label = ({ name, htmlFor, className }) =>
  /* html */ `<label for=${htmlFor} class=${className}>${name}</label>`;
