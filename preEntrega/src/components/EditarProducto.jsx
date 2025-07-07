import { useEffect, useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { useParams } from "react-router-dom";

function FormularioEdicion({}) {
  const {obtenerProducto,productoEncontrado} = useProductosContext()
  const {id} = useParams()
  const [producto,setProducto] = useState(productoEncontrado)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
        obtenerProducto(id).then(()=>{
          setCargando(false)
        }).catch((err)=>{
          setError(err)
          setCargando(false)
        })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`https://681c26606ae7c794cf70ceb6.mockapi.io/api/v1/productos/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) {
        throw new Error('Error al actualizar el producto.');
      }
      const data = await respuesta.json();
      onActualizar(data);
      alert('Producto actualizado correctamente.');
    } catch (error) {
      console.error(error.message);
      alert('Hubo un problema al actualizar el producto.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio || ''}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={producto.descripcion || ''}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
}


export default FormularioEdicion