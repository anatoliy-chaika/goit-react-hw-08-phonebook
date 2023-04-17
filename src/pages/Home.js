import { Hero, Info, MainStyled } from './Home.styled';
import { useAuth } from 'Hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <MainStyled>
      <Hero>Welcome to your personal Phonebook</Hero>
      {!isLoggedIn && (
        <Info>to continue log in to your account or register</Info>
      )}
    </MainStyled>
  );
}
