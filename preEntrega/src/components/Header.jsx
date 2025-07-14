import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <>
      <div className="d-flex flex-column ">
        <header className="bg-primary text-white py-4 text-center">
          <h1>Bienvenido a Mi Tienda Online</h1>
        </header>
      </div>
    </>
  );
}
export default Header