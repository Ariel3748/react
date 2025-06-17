export const agregarProducto = (producto) => {
    return(
  new Promise(async (res, rej) => {
    try {
      const respuesta = await fetch(
        "https://681c26606ae7c794cf70ceb6.mockapi.io/articles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto.");
      }
      const data = await respuesta.json();
      console.log("Producto agregado:", data);
      res(data)
    } catch (error) {
      console.error(error.message);
      rej(error)
    }
  }));
};
