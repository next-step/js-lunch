export function toHTML(htmlString) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = htmlString.trim();
  return wrapper.firstChild;
}
