import React, {createContext, useContext, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
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

    function editarProducto(producto){
        return( new Promise(async (res,rej) =>{
            try {
                const respuesta = await fetch(`https://681c26606ae7c794cf70ceb6.mockapi.io/articles/${producto.id}`, {
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
                    res(data)
                } catch (error) {
                    rej(error)
                }
        })

        )
    }


    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('¿Estás seguro de eliminar?');
        if (confirmar) {
        try {
            const respuesta = await fetch(`https://681c26606ae7c794cf70ceb6.mockapi.io/articles/${id}`, {
                method: 'DELETE',
            });
            if (!respuesta.ok) throw new Error('Error al eliminar');
                alert('Producto eliminado correctamente.');
        } catch (error) {
            console.error(error.message);
            alert('Hubo un problema al eliminar el producto.');
        }
        }
    };



 
 
 return (
        <ProductosContext.Provider value={{editarProducto, productos, obtenerProductosDeApi, agregarProducto, obtenerProducto, productoEncontrado, eliminarProducto}}>
        {children}
        </ProductosContext.Provider> 
    );
}
export const useProductosContext = () => useContext(ProductosContext);