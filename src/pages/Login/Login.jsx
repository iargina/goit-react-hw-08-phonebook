import { LoginForm } from 'components/LoginForm/LoginForm';

import css from './Login.module.css';

export default function Login() {
  return (
    <section className={css.container}>
      <h1>Log In here</h1>
      <LoginForm />{' '}
    </section>
  );
}
