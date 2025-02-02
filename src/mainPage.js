import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const MainPage=()=>{
  const backNavigate=useNavigate();

  const goToLoginPage=()=>{
    backNavigate('/');
  }

const onLoginOut =()=>{
  const auth = getAuth();
  signOut(auth).then(() => {
    goToLoginPage();
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


 
  
  return (
    <div>
      <div className='header'>
      <Header/>
      </div>
      <div className='content'>
      <MainContent/>
      </div>
      <div className="navbar">
      <Navbar/>
      </div>
      
    <div className='buttonBack'>
    <button onClick={onLoginOut}>Выход</button>
    </div>
    </div>
  )

}

export default MainPage;