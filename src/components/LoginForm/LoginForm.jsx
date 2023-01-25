import React from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
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
    <form className={css.form} onSubmit={onSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Email
        <input type="email" name="email" className={css.input} required />
      </label>
      <label htmlFor="" className={css.formLabel}>
        Password
        <input type="password" name="password" className={css.input} required />
      </label>
      <button type="submit" className={css.submit}>
        LogIn
      </button>
    </form>
  );
};
