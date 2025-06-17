import React, { useState } from "react";
import { agregarProducto } from "../assets/request";

function FormularioProducto({}) {
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
      alert(error); // Acá salta el mensaje
    } else {
      agregarProducto(producto)
        .then((data) => setProducto({ name: "", price: "", description: "" }, alert("El producto se agrego correctamente")))
        .catch((error) => alert(validarForm));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
