import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 5px solid gold;

  &:hover {
    background-color: black;
  }
`;
