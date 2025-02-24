export const createObserver = ({ publisher, subscribers, event }) => {
  const publisherElement = publisher;
  const subscriberElements = subscribers;
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mutation of mutationList) {
      if (mutation.type === "attributes") {
        subscriberElements.forEach((subscriberElement) => {
          const checkedClass = publisherElement.classList.item(1);
          const customEvent = new CustomEvent(event, {
            detail: checkedClass,
          });
          subscriberElement.dispatchEvent(customEvent);
        });
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(publisherElement, config);
};
