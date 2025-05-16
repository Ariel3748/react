import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card";
import '../styles/ProductosDisponibles.css'

function ContainerProductos({funcionAgregarAlCarrito}){
    const[productos,setProductos] = useState([])  
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://681c26606ae7c794cf70ceb6.mockapi.io/articles")
      .then((respuesta) => respuesta.json())
      .then((datos) =>{ 
        setProductos(datos)
        setCargando(false)
      })
        
      .catch((error) => {
        console.error("Error:", error)
        setError(error)
        setCargando(false)
      });
  }, []);




 if (cargando) {
        return <p>Cargando productos...</p>;

    }else if (error){
        return <p>{error}</p>;

    }else{
        return(
            <div className="container-productos">
                {productos.map((producto) => (
                    <Card
                        producto={producto}
                        funcionCarrito = {funcionAgregarAlCarrito}
                    />
                ))}
            </div>
        )
    }

    
}
export default ContainerProductos