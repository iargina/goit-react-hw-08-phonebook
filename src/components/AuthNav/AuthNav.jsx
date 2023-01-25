import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <NavLink className={css.link} to="/registration">
        Registration
      </NavLink>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
    </>
  );
};
