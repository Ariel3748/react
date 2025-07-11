import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { IniciarSesionComponent } from "./IniciarSesion";
import { RegistrarComponent } from "./RegistroUsuarioEmail";
function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { user, admin } = useAuthContext();
  const { logout } = useAuthContext();

  



  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === "admin" && password === "1234") {
      login(usuario);
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  if (user || admin ) {
    return (
      <>
        <button onClick={logout}>Cerrar Sesion</button>
      </>
    );
  }

  return (
    <div>
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
      <IniciarSesionComponent/>
      <RegistrarComponent/>
    </div>
  );
}
export default Login;
