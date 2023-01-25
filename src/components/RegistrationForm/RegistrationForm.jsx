import React from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';

import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Name
        <input
          type="text"
          name="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label htmlFor="" className={css.formLabel}>
        Email
        <input type="email" name="email" className={css.input} required />
      </label>
      <label htmlFor="" className={css.formLabel}>
        Password
        <input type="password" name="password" className={css.input} required />
      </label>
      <button type="submit" className={css.submit}>
        Register
      </button>
    </form>
  );
};
