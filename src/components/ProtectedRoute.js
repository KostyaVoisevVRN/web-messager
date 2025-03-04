import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export function ProtectedRoute({ children, mode = 'protectedForAuth' }) {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => unsubscribe(); // Отписываемся при размонтировании компонента
    }, []);
  
    if (loading) {
      return <div>Загрузка...</div>; // Показываем индикатор загрузки, пока проверяется аутентификация
    }
  
    if (mode === 'protectedForLogout') {
      return user ? <Navigate to="/main" replace /> : children
  
    }
    return user ? children : <Navigate to="/" replace />; // Если пользователь не авторизован, перенаправляем на /
  }


