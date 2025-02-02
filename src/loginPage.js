import React from 'react';
import style from './LoginPage.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';





const ERRORS_CODE_MAP = {
  /** код ошибки сервера, когда отправляем невалидную почту */
  INVALID_EMAIL: "auth/invalid-email",
  /** код ошибки сервера, когда сервер не находит пользователя с такими логином и паролем */
  INVALID_EMAIL_OR_PASSWORD: "auth/invalid-credential",
}

const LoginPage = () => {
  const [authMode, setAuthMode] = useState(true);
  const [email, setEmail] = useState('');
  const [pasword, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate=useNavigate()

 
      

  const goToHomePage=()=>{
    navigate('/main')
  }



  const changeAuthMode = () => {
    setAuthMode(false)
  }

  const onError = (error) => {
    const { code, message } = error;

    switch (code) {
      case ERRORS_CODE_MAP.INVALID_EMAIL: {
        setErrorMsg("Неправильный адрес эл. почты")
        return;
      }
      case ERRORS_CODE_MAP.INVALID_EMAIL_OR_PASSWORD: {
        setErrorMsg("Неправильный адрес эл. почты или пароль")
        return;
      }
      default: {
        setErrorMsg(message);
      }
    }
  }

  const onCreateNewUser = () => {
    createUserWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
      
      })
      .catch((error) => {
        onError(error);
      });
  }

  const onSignUp = () => {
    signInWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
        goToHomePage();
      })
      .catch((error) => {
        onError(error);
      });
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setErrorMsg(null)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setErrorMsg(null)
  }


  return (

    <div className={style.header}>
      <input placeholder="Enter Email:" value={email} type='email' onChange={onChangeEmail} />
      <input placeholder="Enter Password:" value={pasword} type='password' onChange={onChangePassword} />
      {authMode && <button onClick={onSignUp}>Login</button>}
      {authMode ? <button onClick={changeAuthMode}>Register</button> : <button onClick={onCreateNewUser}>Create</button>}
      {errorMsg && <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'red'
      }}>{errorMsg}</div>}
    </div>
  );
}


export default LoginPage;


