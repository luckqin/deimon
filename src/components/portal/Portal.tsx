import * as React from 'react';
import { useLayoutEffect, useMemo } from 'react';
import PurePortal from './PurePortal';

function MountElement({ parent, node }) {
  useLayoutEffect(() => {
    parent.appendChild(node);

    return () => {
      parent.removeChild(node);
    };
  }, [parent, node]);

  return null;
}

interface IPortalProps {
  visible: boolean;
  children: React.ReactNode;
}

export function Portal(props: IPortalProps) {
  const { children, visible } = props;
  const node = useMemo(() => document.createElement('div'), []);
  const parent = useMemo(() => document.querySelector('body'), []);

  return (
    visible &&
    node && (
      <PurePortal selector={node}>
        <MountElement parent={parent} node={node} />
        {children}
      </PurePortal>
    )
  );
}

export default Portal;
