import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 80px;
  border: 1px solid #cfcfd0;
  border-radius: 5px;
  padding: 2px 6px;
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
