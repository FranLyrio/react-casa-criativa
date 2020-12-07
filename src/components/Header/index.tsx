import React from 'react';

import { Title } from './style';

const Header: React.FC = ({ children }) => {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
};

export default Header;
