import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { iniciarSesion } from "../auth/firebase";
import { Form, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";

export function IniciarSesionComponent() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();


  function iniciarSesionHandler(e) {
    e.preventDefault()
    iniciarSesion(usuario,password).then((user)=>{
      login(usuario)
      toast.success("Inicio sesion exitoso");
    }).catch((errores)=>{
      console.log(errores)
      toast.error(errores.message)});
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Iniciar Sesión con email</h2>
      <Form onSubmit={iniciarSesionHandler}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresá tu email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresá tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </div>
      </Form>
      <ToastContainer/>
    </Container>
  );
}
