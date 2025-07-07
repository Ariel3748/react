import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card";
import '../styles/ProductosDisponibles.css'
import { useProductosContext } from "../context/ProductosContext";

function ContainerProductos({}){
    //const[productos,setProductos] = useState([])  
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const {productos,obtenerProductosDeApi } = useProductosContext()


  useEffect(() => {//llamar a el contexto de obtenerProductosDeApi con then y eso
            obtenerProductosDeApi().then((productos) =>{
                setCargando(false)
            }).catch((err) =>{
                setCargando(false)
                setError(err)
            })
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
                    />
                ))}
            </div>
        )
    }

    
}
export default ContainerProductos