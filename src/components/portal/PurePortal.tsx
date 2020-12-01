import * as React from 'react';
import { createPortal } from 'react-dom';
import { memorize } from '../../utils/memo';
import { getNodeFromSelector, removeAllChildren } from './utils';

export interface IPurePortalProps {
  selector: string | HTMLElement;
  append?: boolean;
}

export class PurePortal extends React.Component<IPurePortalProps> {
  static defaultProps = {
    append: false,
  };

  getContainer = memorize((selector: string | Element) => {
    const node = getNodeFromSelector(selector);
    if (!node) {
      return node;
    }
    if (!this.props.append) {
      removeAllChildren(node);
    }
    return node;
  });

  render() {
    const { selector, children } = this.props;
    const domNode = this.getContainer(selector);

    const vnode = createPortal(children, domNode);

    return vnode;
  }
}

export default PurePortal;
