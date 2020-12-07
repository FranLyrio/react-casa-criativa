import { tint } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 90vw;
  height: 85vh;

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

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    input {
      border-radius: 6px;
      padding: 16px;
      width: 100%;
      border: none;
      margin: 4px 0;
    }

    textarea {
      max-width: 100%;
      max-height: 25vh;
      min-width: 100%;
      min-height: 25vh;
      padding: 16px;
      margin: 4px 0;
      border: none;
      border-radius: 6px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }

    button {
      width: 100%;
      border-radius: 6px;
      border: none;
      padding: 16px 0;
      background-color: #ff008e;
      color: #ffffff;

      &:hover {
        background-color: ${tint(0.3, '#ff008e')};
      }
    }
  }
`;
