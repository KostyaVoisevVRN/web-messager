import React from "react";
import style from "./header.module.css"
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const backNavigate = useNavigate();

  const goToLoginPage = () => {
    backNavigate('/');
  }

  const onLoginOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      goToLoginPage();
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className={style.header}>
      Header
      <div className={style.buttonBack}>
        <button onClick={onLoginOut}>Sign Out</button>
      </div>
    </div>
  )
}


export default Header;