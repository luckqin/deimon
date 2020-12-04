import * as React from 'react';
import { memo, useMemo } from 'react';
import { IconType, iconsvg } from './svg';

export interface IDMIconProps {
  type: IconType;
  size?: number;
  [_: string]: any;
}

export const Icon = memo<IDMIconProps>(({ type, size, ...props }) => {
  const svgs = useMemo(() => iconsvg({ width: size, height: size }), [size]);

  return <i {...props} dangerouslySetInnerHTML={{ __html: svgs[type] }} />;
});

Icon.displayName = 'DM-Icon';

export default Icon;
