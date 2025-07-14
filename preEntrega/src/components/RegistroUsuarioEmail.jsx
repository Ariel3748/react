import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { crearUsuario} from "../auth/firebase";
import { Form, Button, Container } from 'react-bootstrap';

export function RegistrarComponent() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();


    function registrarUsuario(e){
        e.preventDefault()
        crearUsuario(usuario,password).then((user)=>login(usuario)).catch((error)=>console.log(error))
  }



  return (
   <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Registrarse</h2>
      <Form onSubmit={registrarUsuario}>
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresá tu email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresá tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-grid" style={{marginBottom : "15px"}}>
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
}
