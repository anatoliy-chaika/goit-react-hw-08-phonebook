import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const LinkTo = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover,
  :focus {
    color: grey;
  }
  &.active {
    color: red;
  }
`;
