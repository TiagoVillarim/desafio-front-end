import { styled } from "styled-components";

export const StyledButton = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background-color: #b32448;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff4d7a;
  }

  &:focus {
    outline: none;
  }
`;
