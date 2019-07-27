import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-60deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      margin-top: 5px;
      border: 0;
      border-radius: 4px;
      background: #3b9eff;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    span {
      margin-top: 15px;
      font-size: 16px;
      color: #fff;
      opacity: 0.8;

      a {
        color: #fff;
        font-weight: bold;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
