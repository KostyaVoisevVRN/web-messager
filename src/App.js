import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <ProtectedRoute mode={'protectedForLogout'}>
            <LoginPage />
          </ProtectedRoute>} />

        <Route
          path="/main/*"
          element={
            <ProtectedRoute>
              <MainPage /> 
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
