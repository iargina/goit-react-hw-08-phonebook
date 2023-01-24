import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.container}>
      <h3>Log In here</h3>
      <LoginForm />{' '}
    </div>
  );
}
