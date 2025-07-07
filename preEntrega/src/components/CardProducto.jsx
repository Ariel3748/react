import { Link, useParams } from 'react-router-dom';
import '../styles/CardProducto.css'
import { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext';
import { useProductosContext } from '../context/ProductosContext';


export default function CardProducto({}){

  const {productoEncontrado, obtenerProducto} = useProductosContext()

  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const {agregarAlCarritoF} = useContext(CarritoContext)
  const {admin} = useAuthContext()


  useEffect(() => {
        obtenerProducto(id).then(()=>{
          setCargando(false)
        }).catch((err)=>{
          setError(err)
          setCargando(false)
        })
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
    agregarAlCarritoF(productoEncontrado, cantidad);
  };

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;




return(
    <div className="producto-detalle">
  <img className="producto-img" src={productoEncontrado.image} alt={productoEncontrado.name} />

  <div className="producto-info">
    <h2 className="producto-titulo">{productoEncontrado.name}</h2>
    <p className="producto-descripcion">
      {productoEncontrado.description}
    </p>
    <p className="producto-precio">{productoEncontrado.price}</p>

    <div className="cantidad-control">
      <button onClick={restarContador} className="btn-cantidad">-</button>
      <span className="cantidad-valor">{cantidad}</span>
      <button onClick={sumarContador} className="btn-cantidad">+</button>
    </div>

    {admin ? <Link to ={"/admin/editarProducto/" + id }><button className="btn-agregar">Editar Producto</button></Link>  : <button onClick={() => {agregarAlCarrito(productoEncontrado)}} className="btn-agregar">Agregar al carrito</button>}
  </div>
</div>

)



}