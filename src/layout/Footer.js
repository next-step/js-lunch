const Footer = () => {
  const render = () => {
    const html = /* html */ `made by hojeong`;

    const container = document.createElement("footer");
    container.innerHTML = html;

    return container;
  };

  return render();
};

export default Footer;
