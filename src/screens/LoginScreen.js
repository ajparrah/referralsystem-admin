import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(true));
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={handleLogin}>
        Logged
      </button>
    </div>
  )
}

export default LoginScreen;
