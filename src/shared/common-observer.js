// 현재 생각하고 있는 방식입니다.
export const createObserver = ({ publisher, callback }) => {
  const publisherElement = document.getElementById(publisher);
  const config = { attributes: true, childList: true, subtree: true };

  const observer = new MutationObserver(callback);
  observer.observe(publisherElement, config);

  return {
    disconnect: observer.disconnect(),
  };
};
