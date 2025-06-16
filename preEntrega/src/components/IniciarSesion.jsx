import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { iniciarSesion } from "../auth/firebase";
export function IniciarSesionComponent() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();


  function iniciarSesionHandler(e) {
    e.preventDefault()
    iniciarSesion(usuario,password).then((user)=>login(usuario)).catch((errores)=>console.log(errores));
  }

  return (
    <>
      <form onSubmit={iniciarSesionHandler}>
        <h2>Inicar Sesion con email</h2>
        <div>
          <label>Email:</label>
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
        <button type="submit">Iniciar Sesion</button>
      </form>
    </>
  );
}
