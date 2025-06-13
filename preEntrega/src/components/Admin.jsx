import { useContext } from "react"
import {  useAuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function Admin({}){

    const {user} = useAuthContext()

    if(!user){
    alert("No estas logueado")
    return(
    <Navigate to={'/login'} replace/>)
  }


    return(
        <>
            <h1>Hola administrador</h1>
        </>
    )

}