import { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { tint, shade } from 'polished';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  background?: string;
}

export const AnchorStyle = styled.a<AnchorProps>`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #202024;
  transition: 0.2s;

  ${props =>
    props.background === 'pink'
      ? css`
          padding: 8px;
          background-color: #ff008e;
          width: 200px;
          color: #ffffff;
        `
      : css`
          margin: 125px;
          width: 25vw;
          padding: 16px;
          background-color: #01ffc2;
        `}

  &:hover {
    ${props =>
      props.background === 'pink'
        ? css`
            background-color: ${tint(0.3, '#ff008e')};
          `
        : css`
            background-color: ${shade(0.2, '#01ffc2')};
          `}
  }
`;
