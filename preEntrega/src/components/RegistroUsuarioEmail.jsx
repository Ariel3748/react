import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { crearUsuario} from "../auth/firebase";
export function RegistrarComponent() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();


    function registrarUsuario(e){
        e.preventDefault()
        crearUsuario(usuario,password).then((user)=>login(usuario)).catch((error)=>console.log(error))
  }



  return (
    <>
      <form onSubmit={registrarUsuario}>
        <h2>Registrarse</h2>
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
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
