import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useAuth } from 'hooks/userAuth';
import { PrivateRoute } from 'utils/PrivateRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { Navigation } from './Navigation/Navigation';
import { Spinner } from './Spinner/Spinner';

import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <>
      <header className={css.container}>
        <Navigation />
      </header>
      <main className={css.container}>
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
      </main>
    </>
  );
};
