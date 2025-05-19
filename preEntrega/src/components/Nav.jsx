import '../styles/Nav.css'
import { Link } from 'react-router-dom'


function Nav(){
    return(
        <>
            <nav>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/carrito'>Carrito</Link></li>
            </nav>
        </>
    )
}

export default Nav