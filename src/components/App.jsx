import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthNav } from './AuthNav/AuthNav';
import { useEffect } from 'react';
import css from './App.module.css';
import { useAuth } from 'hooks/userAuth';
import { UserMenu } from './UserMenu/UserMenu';
import { PrivateRoute } from 'utils/PrivateRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  console.log(isLoggedIn);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
