import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export default function Registration() {
  return (
    <div className={css.container}>
      <h3> Registration </h3>
      <RegistrationForm />
    </div>
  );
}
