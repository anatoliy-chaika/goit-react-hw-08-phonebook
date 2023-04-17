import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { useAuth } from 'Hooks/useAuth';
import { ButtonLogOut, Div } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <p>Welcome, {user.name}</p>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </Div>
  );
};
