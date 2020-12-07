import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d60077;
  color: #ffffff;
  border-radius: 6px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px 48px;
  width: 670px;

  p {
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 3px;
    margin-bottom: 16px;
    max-width: 100%;
  }

  p + p {
    font-size: 16px;
    letter-spacing: 1px;
  }

  a {
    color: #ffffff;
    text-align: right;
    transition: 0.2s;

    &:hover {
      color: #01ffc2;
    }
  }
`;

// <h3>Brincar com seu cachorro 🐶</h3>
// <p>Lazer</p>
// <p>SABGIDGSADSADHIASDBAI</p>
// <a href="/">+ detalhes</a>
