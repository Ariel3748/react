import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const {logout} = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  if(user){
    return(
      <>
        <button onClick={logout}>
          Cerrar Sesion
        </button>
      </>
    )
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
export default Login;

















/*export default function Login({user, admin, setUser, setAdmin}){

    return(
        <>
            <button onClick={setUser}>{user ? "Cerrar Sesion Usuario" : "Iniciar Sesion Usuario"}</button> 
            <button onClick={setAdmin}>{admin ? "Cerrar Sesion Admin" : "Iniciar Sesion Admin"}</button>             
        </>

    )
}*/