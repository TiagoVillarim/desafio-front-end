import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const ModificationItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DateLabel = styled.div`
  background-color: #gray;
  padding: 8px;
  font-size: 0.9rem;
  color: white;
  border-radius: 4px 4px 0 0;
`;

export const ContentSection = styled.div`
  padding: 16px;
  border: 1px solid #eee;
`;

export const ModifiedContent = styled(ContentSection)`
  background-color: #e8f5e9;
  color: #1b5e20;
  border-radius: 2px;
`;

export const OriginalContent = styled(ContentSection)<{ $isVisible: boolean }>`
  background-color: #ffebee;
  color: #b71c1c;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  white-space: pre-wrap;
  margin-top: 8px;
  border-radius: 2px;
`;

export const ToggleButton = styled.button<{ $isActive: boolean }>`
  margin: 15px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  background-color: ${({ $isActive }) => ($isActive ? "#ff3366" : "#b32448")};
  color: ${({ $isActive }) => ($isActive ? "white" : "white")};
  border: none;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff4d7a;
    opacity: 0.9;
  }
`;
