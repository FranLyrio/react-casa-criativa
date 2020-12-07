import React, { AnchorHTMLAttributes } from 'react';

import { AnchorStyle } from './style';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  background?: string;
}

const Anchor: React.FC<AnchorProps> = ({ children, background, ...rest }) => {
  return (
    <AnchorStyle href="/" background={background} {...rest}>
      {children}
    </AnchorStyle>
  );
};

export default Anchor;
