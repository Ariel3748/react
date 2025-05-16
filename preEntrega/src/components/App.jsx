import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Home from'../layouts/Home'
import ContainerProductos from './ContainerProductos'
import Carrito from './Carrito'


function App() {
  const [cant,setCantidad] = useState(0)
  const [carrito, setCarrito] = useState([])


  const agregarAlCarrito = (producto,cantidad) => {
    console.log("Producto:",producto.name,"cantidad:",cantidad)
    const productoConCantidad = { ...producto, cantidad };
    setCarrito([...carrito, productoConCantidad]);
  };

  console.log(carrito)


  return (
    <>
      <Home/>
      <ContainerProductos
        funcionAgregarAlCarrito = {agregarAlCarrito}
      />
      <Carrito
        carrito={carrito}
      />
    </>
  )
}

export default App
