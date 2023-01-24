import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/userAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <h3>Welcome, {user.name}!</h3>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </>
  );
};
