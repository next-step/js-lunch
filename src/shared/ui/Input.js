export const Input = ({
  name,
  className,
  placeholder = "",
  required = false,
}) => /* html */ `<input class=${className} name=${name}
    required=${required || false}
    placeholder="${placeholder || ""}" 
/>`;
