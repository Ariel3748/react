import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { IniciarSesionComponent } from "./IniciarSesion";
import { RegistrarComponent } from "./RegistroUsuarioEmail";


import Button from 'react-bootstrap/Button';


function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { user, admin } = useAuthContext();
  const { logout } = useAuthContext();

  

  if (user || admin ) {
    return (
      <>
        <div class="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>
            <div>
              <Button onClick={logout} variant="secondary">Cerrar Sesion</Button>
            </div>
        </div>
       </>
      );
  }

  return (
    <div>
      <IniciarSesionComponent/>
      <RegistrarComponent/>
    </div>
  );
}
export default Login;
