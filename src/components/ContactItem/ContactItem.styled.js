import styled from '@emotion/styled';

export const LiItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonDel = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover,
  :focus {
    background-color: red;
    color: #f4f6f9;
  }
`;

export const Phone = styled.span`
  margin-left: 70px;
`;
