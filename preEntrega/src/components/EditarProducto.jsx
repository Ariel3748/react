import { useEffect, useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from "react-toastify";

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
      toast.error(form)}
    else{
      editarProducto(producto).then(()=>{
       toast.success("El producto se modifico exitosamente")
        setCargando(false)
      }).catch((err)=>{
        console.log(err)
        setError(err)
        setCargando(false)
        toast.error(err)
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
  if(!producto.image.trim()){
    return("La url de la imgaen no debe estar vacía")
  }
  return null;
};




  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2 className="mb-4 text-center">Editar Producto</h2>

      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          placeholder="Nombre del producto"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          placeholder="Precio"
          min="0"
          required
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDescripcion">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          as="textarea"
          name="image"
          value={producto.image || ''}
          onChange={handleChange}
          placeholder="Imagen del producto"
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          placeholder="Descripción del producto"
          rows={3}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Actualizar Producto
      </Button>
      <ToastContainer/>
    </Form>
  );
}


export default FormularioEdicion