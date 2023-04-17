import { useDispatch } from 'react-redux';
import { logIn } from 'components/redux/auth/operations';
import { Form, Lable, Input, ButtonSubmit } from './logInForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Lable>
        Email
        <Input type="email" name="email" />
      </Lable>
      <Lable>
        Password
        <Input type="password" name="password" />
      </Lable>
      <ButtonSubmit type="submit">Log In</ButtonSubmit>
    </Form>
  );
};
