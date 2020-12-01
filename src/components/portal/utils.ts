export function createElement(tagName: string, options?: ElementCreationOptions) {
  const node = document.createElement(tagName, options);
  return node;
}

export function getNodeFromSelector(selector: string | Element): Element {
  if (selector instanceof Element) {
    return selector;
  }
  if (typeof selector === 'string') {
    const node = document.querySelector(selector);
    if (node) {
      return node;
    }
  }
  throw new Error('Invalid selector');
}

export function removeAllChildren(node: Node) {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
