import { useParams } from 'react-router-dom';
import '../styles/CardProducto.css'
import { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';


export default function CardProducto({}){

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const {agregarAlCarritoF} = useContext(CarritoContext)


  useEffect(() => {
    fetch("https://681c26606ae7c794cf70ceb6.mockapi.io/articles")
      .then((res) => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === id);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

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
    console.log("La cantidad que va al coso:",cantidad)
    agregarAlCarritoF(producto, cantidad);
  };

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;




return(
    <div className="producto-detalle">
  <img className="producto-img" src={producto.image} alt={producto.name} />

  <div className="producto-info">
    <h2 className="producto-titulo">{producto.name}</h2>
    <p className="producto-descripcion">
      {producto.description}
    </p>
    <p className="producto-precio">{producto.price}</p>

    <div className="cantidad-control">
      <button onClick={restarContador} className="btn-cantidad">-</button>
      <span className="cantidad-valor">{cantidad}</span>
      <button onClick={sumarContador} className="btn-cantidad">+</button>
    </div>

    <button onClick={() => {agregarAlCarrito(producto)}} className="btn-agregar">Agregar al carrito</button>
  </div>
</div>

)



}