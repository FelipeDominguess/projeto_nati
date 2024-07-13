import React from 'react';
import { auth, firebase } from '../../../App';

const Login = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      console.log('User logged in: ', result.user);
    } catch (error) {
      console.error('Error during login: ', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
