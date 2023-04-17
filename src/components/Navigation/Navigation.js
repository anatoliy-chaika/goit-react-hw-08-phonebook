import { useAuth } from 'Hooks/useAuth';
import { Nav, LinkTo } from './Navigation.styled';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkTo to="/">Home</LinkTo>
      {isLoggedIn && <LinkTo to="/contacts">Contacts</LinkTo>}
    </Nav>
  );
};
