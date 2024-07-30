import React, { useState } from 'react';
import style from './LoginPage.module.css';

const LoginPage = () => {
  const [authMode, setAuthMode] = useState('login');

  const changeAuthMode = () => {
    setAuthMode((currentMode) => {
      if (currentMode === 'login') {
        return 'register';
      }
      return 'login';
    });
  };

  return (
    <div className={style.header}>
      {authMode === 'login' && (
        <>
          <input placeholder="Enter Login:" />
          <input placeholder="Enter Password:" />
          <button>Login</button>
          <button onClick={changeAuthMode}>Register</button>
        </>
      )}
      {authMode === 'register' && (
        <>
          <input placeholder="Name:" />
          <input placeholder="Email:" />
          <input placeholder="Password:" />
          <button onClick={changeAuthMode}>Register</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
