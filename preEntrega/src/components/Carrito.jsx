import { Navigate, replace } from 'react-router-dom';
import '../styles/Carrito.css'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext';

export default function Carrito() {

  const {carrito,borrarProducto,vaciarCarrito} = useContext(CarritoContext)
  const {user} = useAuthContext()

  if(!user){
    alert("No estas logueado")
    return(
    <Navigate to={'/login'} replace/>)
  }



  return (
    <>
      <div id="carrito" className="carrito-container">
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <h2 className="carrito-titulo">Carrito</h2>
        <ul className="carrito-lista">
          {carrito.length > 0 ? (
            carrito.map((item) => (
              <li key={item.id} className="carrito-item">
                <img src={item.image} alt={item.name} className="carrito-img" />
                <div className="carrito-info">
                  <h3>{item.name}</h3>
                  <p>Precio Unitario: ${item.price}</p>
                  <p>Cantidad: {item.cantidad}</p>
                </div>
                <button
                  className="carrito-boton"
                  onClick={() => borrarProducto(item.id)}
                >
                  x
                </button>
              </li>
            ))
          ) : (
            <p className="carrito-vacio">Carrito vacío</p>
          )}
        </ul>
      </div>
    </>
  );
}
