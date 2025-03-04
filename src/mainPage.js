import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Dialogs from "./DialogsPage"
import style from './mainContainer.module.css'

const getPage = (pathName) => {
  if (pathName === '/main/dialogs') {
    return 'dialogsPage'
  }

  return 'mainPage'
}

const MainPage = () => {
  const location = useLocation();

  const [page, setPage] = useState('mainPage');

  useEffect(() => {
    setPage(getPage(location.pathname))
  }, [location.pathname]);

  return (
    <div className={style.mainContainer}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.body}>
        <div className={style.navbar}>
          <Navbar />
        </div>
        <div className={style.content}>
          {page === 'mainPage' && <MainContent />}
          {page === 'dialogsPage' && <Dialogs />}
        </div>
      </div>
    </div>
  )
}

export default MainPage;