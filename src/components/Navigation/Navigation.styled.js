import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
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
