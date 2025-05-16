/*

Crear un componente para mostrar los productos disponibles.

Usar useState para manejar el estado del carrito de compras.

Implementar un evento de clic para añadir productos al carrito.



*/

import { useState } from "react";
import "../styles/ProductosDisponibles.css";
import { useEffect } from "react";
import Card from './Card'

function ProductosDisponibles({agregarAlCarrito}) {
  const[productos,setProductos]  = useState([])
  const[cantidad,setCantidad] = useState(0) 




  useEffect(() => {
    fetch("https://681c26606ae7c794cf70ceb6.mockapi.io/articles")
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => console.error("Error:", error));
  }, []);



/*------------------------------------------------------------------------------------------------------*/

  return (
    <>
      <div className="container-productos">
        {productos.map((producto) => (
          <Card
          producto={producto}
          funcionCarrito={agregarAlCarrito}
          />
            
        ))}
      </div>
    </>
  );
}

export default ProductosDisponibles;
