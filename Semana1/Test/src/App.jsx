import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDeProductos from './components/ListaProductos'
import Tarjeta from './components/Tarjeta'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <ListaDeProductos arrayProductos = {["Pan","Merca","Porro","Pastillas"]} />
      <Tarjeta Titulo={"Fernet"} Descripcion={"Fernet Branca en oferta porque pinto"} />
   </>
  )
}

export default App



