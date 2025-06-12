export default function Login({user, admin, setUser, setAdmin}){

    return(
        <>
            <button onClick={setUser}>{user ? "Cerrar Sesion Usuario" : "Iniciar Sesion Usuario"}</button> 
            <button onClick={setAdmin}>{admin ? "Cerrar Sesion Admin" : "Iniciar Sesion Admin"}</button>             
        </>

    )
}