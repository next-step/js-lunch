export const createObserver = ({
  publishers,
  subscribers,
  event,
  attributeName = [""],
}) => {
  const publisherElements = publishers;
  const subscriberElements = subscribers;
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        attributeName.includes(mutation.attributeName)
      ) {
        subscriberElements.forEach((subscriberElement) => {
          const customEvent = new CustomEvent(event);
          subscriberElement.dispatchEvent(customEvent);
        });
      }
    }
  };

  const observer = new MutationObserver(callback);
  publisherElements.forEach((publisherElement) => {
    observer.observe(publisherElement, config);
  });
};
