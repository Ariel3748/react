import { useState } from "react";
function Card({ producto, funcionCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }


  const agregarAlCarrito = () => {
    if (cantidad < 1) return;
    funcionCarrito(producto, cantidad); //
  };

  /*function agregarAlCarrito(producto, cantidad) {
    if (cantidad < 1) return;
    console.log("en la funcion:",cantidad)
    funcionCarrito({ ...producto, cantidad}); // Pasamos también la cantidad
  }*/

  return (
    <>
      <article id={producto.id} className="tarjetas">
        <h2>{producto.name}</h2>
        <img src={producto.image} alt={producto.name} className="img" />
        <p>{producto.description}</p>
        <p>{producto.price + "$"}</p>
        <button
          onClick={() => {
            agregarAlCarrito(producto);
            console.log("en el onclick:",cantidad)
          }}
        >
          Agregar al Carrito
        </button>
        <div>
          <button onClick={() => restarContador()}>-</button>
          <span style={{ margin: "0 10px", color: "black" }}>{cantidad}</span>
          <button onClick={() => sumarContador()}>+</button>
        </div>
      </article>
    </>
  );
}

export default Card;
