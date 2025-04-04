import { styled } from "styled-components";

export const LoginContainer = styled.div`
  max-width: 500px;
  margin: 6rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  color: #b32448;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #b32448;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;
export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  padding: 8px;
  background: #f8d7da;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
  margin-top: 10px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  &:hover {
    color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
