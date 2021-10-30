export function createElement(tagName, attributes = {}, children = []) {
  const element = document.createElement(tagName);

  Object.keys(attributes).forEach((attributeName) => {
    element.setAttribute(attributeName, attributes[attributeName]);
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}
