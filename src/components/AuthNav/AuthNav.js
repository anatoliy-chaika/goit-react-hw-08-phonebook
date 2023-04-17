import { Wrap } from './AuthNav.styled';
import { LinkTo } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrap>
      <LinkTo to="/register">Register</LinkTo>
      <LinkTo to="/login">Log In</LinkTo>
    </Wrap>
  );
};
