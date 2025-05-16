/*
Crea un componente Tarjeta que reciba props para mostrar un título, una descripción y un botón personalizado


<Tarjeta titulo="Oferta especial"
descripcion="20% de descuento en todos los productos"
botonTexto="Ver más" />


*/

function Tarjeta({Titulo ,Descripcion}){
    return(
        <article>
            <h3>{Titulo}</h3>
            <p>{Descripcion}</p>
            <button> Ver mas... </button>
        </article>
    )
}

export default Tarjeta