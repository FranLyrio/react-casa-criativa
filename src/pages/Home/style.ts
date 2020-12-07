import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 90vw;
  height: 85vh;
`;

export const Content = styled.div`
  max-width: 730px;
  padding: 8px 48px;
  display: flex;
  flex-direction: column;
  margin-top: 25vh;

  p {
    text-align: center;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Ideas = styled.div`
  flex: 1;
  margin-left: 16px;
  padding: 8px 48px;

  > a {
    position: fixed;
    bottom: 50px;
  }

  div {
    button {
      border: none;
      background-color: transparent;
      width: 16px;
      height: 16px;
      transform: translateX(550px);
      color: #ffffff;
      transition: 0.2s;

      &:hover {
        color: #01ffc2;
      }

      & + button {
        margin-left: 8px;
      }
    }
  }
`;
