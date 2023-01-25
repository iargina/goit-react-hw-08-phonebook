import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import css from './Registration.module.css';

export default function Registration() {
  return (
    <section className={css.container}>
      <h1> Registration </h1>
      <RegistrationForm />
    </section>
  );
}
