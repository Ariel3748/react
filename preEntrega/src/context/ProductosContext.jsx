import React, {createContext, useContext, useState} from 'react'
 const ProductosContext = createContext();
 export function ProductosProvider({children}){
 
    const [productos, setProductos ] = useState([])
    const [productoEncontrado, setProductoEncontrado] = useState([])
 

    function obtenerProductosDeApi(){
        return(
            new Promise((res,rej) => {
            fetch("https://681c26606ae7c794cf70ceb6.mockapi.io/articles")
                .then((respuesta) => respuesta.json())
                .then((datos) =>{ 
                    setProductos(datos)
                    res(datos)
                })
                .catch((error) => {
                    console.error("Error:", error)
                    rej(error)

                });
            })
        )
    }


    const agregarProducto = (producto) => {
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


    function obtenerProducto(id){
        return(new Promise((res, rej) =>{
            fetch("https://681c26606ae7c794cf70ceb6.mockapi.io/articles")
            .then((res) => res.json())
            .then((datos) => {
                const productoEncontrado = datos.find((item) => item.id === id);
                if (productoEncontrado) {
                setProductoEncontrado(productoEncontrado);
                res(productoEncontrado)
                } else {
                    rej("Producto no encontrado.")
                }

            })
            .catch((err) => {
                rej(err)
                console.log("Error:", err);
            })
        }))
    }




 
 
 return (
        <ProductosContext.Provider value={{productos, obtenerProductosDeApi, agregarProducto, obtenerProducto, productoEncontrado}}>
        {children}
        </ProductosContext.Provider> 
    );
}
export const useProductosContext = () => useContext(ProductosContext);