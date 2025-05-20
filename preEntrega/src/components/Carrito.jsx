import '../styles/Carrito.css'

export default function Carrito({ carrito, borrarProducto }) {
  return (
    <>
      <div id="carrito" className="carrito-container">
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
