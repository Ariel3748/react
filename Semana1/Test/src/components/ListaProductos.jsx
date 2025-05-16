/*
Crea un componente que reciba un array de productos como prop y los muestre en una lista ordenada
*/

function ListaDeProductos({arrayProductos}){
    return(
        <ol>
            {arrayProductos.map(producto => 
                <li key = {producto}>   {producto}      </li>
            )}
        </ol>
    )
}

export default ListaDeProductos
