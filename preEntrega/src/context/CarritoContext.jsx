import React, { createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [cantidad,setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([]);



    function agregarAlCarritoF(producto,cantidad){
        const existe = carrito.some(p => p.id == producto.id);

        if (existe) {
            const carritoActualizado = carrito.map((p) => {
                if (p.id == producto.id){
                    console.log("Sumando:", p.cantidad, "+", cantidad)
                    const productoActualizado = {...p, cantidad: cantidad + p.cantidad}
                    return (productoActualizado)}
                else{return p}
            })
            console.log("carritoActualizado:",carritoActualizado)
            setCarrito(carritoActualizado) 
            toast.success("Producto agregado correctamente")
        }
        else{
            const productoConCantidad = {...producto, cantidad};
            setCarrito([...carrito, productoConCantidad]);
        }
  }



    const vaciarCarrito = () => {
        setCarrito([]);
    };


    function borrarProducto(id){
        const carritoActualizado = carrito.filter((p) => p.id !== id)
        setCarrito(carritoActualizado)
    }



    return (
        <CarritoContext.Provider value={{ cantidad, carrito, agregarAlCarritoF, vaciarCarrito, borrarProducto }}>
            {children}
            <ToastContainer/>
        </CarritoContext.Provider>
    );
}