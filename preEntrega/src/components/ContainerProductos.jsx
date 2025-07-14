import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card";
import '../styles/ProductosDisponibles.css'
import { useProductosContext } from "../context/ProductosContext";
import Cards from "./Card";

function ContainerProductos({}){





    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")
    const {productos,obtenerProductosDeApi, filtrarProductos } = useProductosContext()

    //Paginacion////////////////////////
    const productosPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);
    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);
/////////////


    useEffect(() => {
        filtrarProductos(filtro)
    },[filtro])//filtro




  useEffect(() => {//llamar a el contexto de obtenerProductosDeApi con then y eso
            obtenerProductosDeApi().then((productos) =>{
                setCargando(false)
            }).catch((err) =>{
                setCargando(false)
                setError(err)
            })
  }, []);

  
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);




 if (cargando) {
        return <p>Cargando productos...</p>;

    }else if (error){
        return <p>{error}</p>;

    }else{
        return(
        <>
            <div className="input-group mb-3 mt-3">
                <span className="input-group-text">
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar productos..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
            </div>
            <div className="container-productos">
                {productosActuales.map((producto) => (
                    <Card
                        producto={producto}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center my-4"> {/*Componente de paginacion*/ }
                    {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => cambiarPagina(index + 1)}
                    >
                        {index + 1}
                    </button>
                    ))}
                </div>
        </>
        )
    }

    
}
export default ContainerProductos