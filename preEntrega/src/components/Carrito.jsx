export default function Carrito({ carrito }) {
  return (
    <>
      <div id="carrito">
        <h2>Carrito</h2>
        <ul>
          {carrito.length > 0
            ? carrito.map((item) => (
                <li>
                  <div>
                    <img src={item.image} alt={item.name} style={{width:"50px", heigth:"50px",borderRadius:"20px"}} />
                    <h3>{item.name}</h3>
                    <p>Precio Unitario:{item.price}</p>
                    <p>Cantidad:{item.cantidad}</p>
                  </div>
                </li>
              ))
            : "Carrito vacio"}
        </ul>
      </div>
    </>
  );
}
