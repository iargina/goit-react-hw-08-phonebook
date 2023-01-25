import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/userAuth';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
      <h1 className={css.title}>Welcome, {user.name}!</h1>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </>
  );
};
