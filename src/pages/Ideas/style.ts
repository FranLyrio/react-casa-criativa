import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 85vh;
  margin-top: 32px;

  a {
    color: #01ffc2;
    font-size: 20px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 150px;
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
