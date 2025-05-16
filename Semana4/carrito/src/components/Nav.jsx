import '../styles/Nav.css'

function Nav({color}){
    return(
        <>
            <nav style={{backgroundColor:{color}}}>
                <li>Inicio</li>
                <li>Seccion</li>
                <li>Seccion</li>
            </nav>
        </>
    )
}

export default Nav