export default function Carrito({carrito}){

    return(
        <>
           <div id="carrito">
                <h2>Carrito</h2>
                <ul>{carrito.length > 0 ? 
                    carrito.map((item) => (
                    <li >{item.name}   {item.cantidad}</li>
                    ))
                    : "Carrito vacio"}
                </ul>
           </div>
        </>
    )

}