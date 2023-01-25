import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/userAuth';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};
