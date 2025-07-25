import React, { createContext, useState, useContext } from 'react';
// Crear el contexto de autenticación
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)


  const login = (username) => {
    //Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;
    if (username == "admin@gmail.com"){ //Contraseña test123
      setAdmin(true)
    }
    localStorage.setItem('authToken', token);
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false)
  };


  function verificarLogueo(){
    const userToken = localStorage.getItem('authToken')
    if(userToken == 'fake-token-admin@gmail.com'){
      console.log("sadas")
      setAdmin(true)
      return
    }
    else if(userToken){
      setUser(true)
    }
  }


  return (
    <AuthContext.Provider value={{ user, login, logout, admin,verificarLogueo }}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);
