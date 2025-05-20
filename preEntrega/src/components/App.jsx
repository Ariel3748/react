import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Home from'../layouts/Home'
import ContainerProductos from './ContainerProductos'
import Carrito from './Carrito'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav'
import CardProducto from './CardProducto'

function App() {
  const [cantidad,setCantidad] = useState(0)
  const [carrito, setCarrito] = useState([])



  function agregarAlCarritoF(producto,cantidad){
    const existe = carrito.some(p => p.id == producto.id);

    if (existe) {
        const carritoActualizado = carrito.map((p) => {
            if (p.id == producto.id){
                console.log("Sumando:", p.cantidad, "+", cantidad)
                const productoActualizado = {...p, cantidad: cantidad + p.cantidad}
                return (productoActualizado)}
            else{return p}
        })
        console.log("carritoActualizado:",carritoActualizado)
        setCarrito(carritoActualizado)} 
    else{
        const productoConCantidad = {...producto, cantidad};
        setCarrito([...carrito, productoConCantidad]);
      }
  }

  function borrarProducto(id){
    const carritoActualizado = carrito.filter((p) => p.id !== id)
    setCarrito(carritoActualizado)
  }

  console.log(carrito)


  return (
  <>
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Productos' element={<ContainerProductos/>}/>
          <Route path="/carrito" element={<Carrito carrito={carrito} borrarProducto={borrarProducto}/>}/>

          <Route path="/productos/:id" element={<CardProducto funcionCarrito={agregarAlCarritoF} />} />
        </Routes>
      </div>
    </Router>
  </>
  )
}

export default App



