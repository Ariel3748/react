import React, { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";


function FormularioProducto({}) {
  const {agregarProducto} = useProductosContext()

  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validarFormulario();

    if (error) {
      toast.error(error); // Acá salta el mensaje
    } else {
      agregarProducto(producto)
        .then((data) => setProducto({ name: "", price: "", description: "" }, toast.success("Producto agregado exitosamente")))
        .catch((error) => toast.error(error));
    }
  };

  return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2 className="mb-4 text-center">Agregar Producto</h2>

      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
          placeholder="Ingrese el nombre del producto"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
          placeholder="Ingrese el precio"
          required
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={producto.description}
          onChange={handleChange}
          placeholder="Ingrese la descripción del producto"
          rows={3}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Agregar Producto
      </Button>
      <ToastContainer/>
    </Form>
  );
}

export default FormularioProducto;
