import React, { InputHTMLAttributes } from 'react';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  name?: string;
}

const Input: React.FC<InputProps> = ({ register, name, ...rest }) => {
  return (
    <Container>
      <input name={name} ref={register} {...rest} />
    </Container>
  );
};

export default Input;
