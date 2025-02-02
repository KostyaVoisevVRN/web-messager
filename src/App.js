import './App.css';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import { Routes,Route } from 'react-router-dom';
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
