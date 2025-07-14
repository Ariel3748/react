import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

/*function Nav() {

  const {admin} = useAuthContext();
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {admin ? <li><Link to="/admin/agregarProducto">CRUD</Link></li> : <></>}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
*/

import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  const { admin } = useAuthContext();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            {admin && (
              <Nav.Link as={Link} to="/admin/agregarProducto">CRUD</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;