import { useAuthContext } from "../context/AuthContext";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {

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
