import { useEffect, useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function FormularioEdicion({}) {
  const {obtenerProducto,productoEncontrado, editarProducto} = useProductosContext()
  const {id} = useParams()
  const [producto,setProducto] = useState(productoEncontrado)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const {user} = useAuthContext()

  if(!user){
    alert("No estas logueado")
    return(
    <Navigate to={'/login'} replace/>)
  }




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
    const form = validarFormulario()
    if(form){
      alert(form)}
    else{
      editarProducto(producto).then(()=>{
        alert("El producto se modifico exitosamente")
        setCargando(false)
      }).catch((err)=>{
        console.log(err)
        setError(err)
        setCargando(false)
      })
    }
  };
  



  const validarFormulario = () => {
  const nuevosErrores = {};
  if (!producto.name.trim()) {
    return "El nombre es obligatorio.";
  }
  if (!producto.price || producto.precio <= 0) {
    return "El precio debe ser mayor a 0";
  }
  if (!producto.description.trim() || producto.description.length < 10) {
    return "La descripción debe tener al menos 10 caracteres.";
  }
  return null;
};

  /*const handleSubmit = (e) => {
    e.preventDefault();

    const error = validarFormulario();

    if (error) {
      alert(error); // Acá salta el mensaje
    } else {
      agregarProducto(producto)
        .then((data) => setProducto({ name: "", price: "", description: "" }, alert("El producto se agrego correctamente")))
        .catch((error) => alert(validarForm));
    }
  };*/




  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
}


export default FormularioEdicion