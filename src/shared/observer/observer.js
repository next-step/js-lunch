export const createObserver = ({
  publisher,
  subscribers,
  event,
  attributeName = "",
}) => {
  const publisherElement = publisher;
  const subscriberElements = subscribers;
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === attributeName
      ) {
        subscriberElements.forEach((subscriberElement) => {
          const customEvent = new CustomEvent(event);
          subscriberElement.dispatchEvent(customEvent);
        });
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(publisherElement, config);
};
