import { useState } from "react";
import ProductosDisponibles from "./ProductosDisponibles";
import '../styles/Carrito.css'

function Carrito({carrito}){
   
    return(
        <>
           <div id="carrito">
                <h2>Carrito</h2>
                <ul>{carrito.length > 0 ? 
                    carrito.map((item) => (
                    <li >{item.name}</li>
                    ))
                    : "Carrito vacio"}
                </ul>
           </div>
        </>
    )
}

export default Carrito