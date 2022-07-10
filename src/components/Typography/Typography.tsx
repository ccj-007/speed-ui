import * as React from 'react';
import classNames from 'classnames';

export interface TypographyProps {
  component?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { component } = props
  const Component = component as any;

  return (
    <Component></Component>
  )
}

export default Typography;
