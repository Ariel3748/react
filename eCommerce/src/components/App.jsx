import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Home from'../layouts/Home'
import ContainerProductos from './ContainerProductos'
import Carrito from './Carrito'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Nav from './Nav'
import CardProducto from './CardProducto'
import Contacto from './Contacto'
import About from './About'
import Login from './Login'
import Admin from './Admin'

function App() {
  //const [cantidad,setCantidad] = useState(0)
  //const [carrito, setCarrito] = useState([])
  const [usuario,setUsuario] = useState(false)
  const [admin,setAdmin] = useState(false)



  /*function agregarAlCarritoF(producto,cantidad){
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
  }*/


  function setearAdmin(){
    setAdmin(!admin)
  }

  function setearUser(){
    setUsuario(!usuario)
  }

 // console.log(carrito)


  return (
  <>
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Productos' element={<ContainerProductos/>}/>
          <Route path="/carrito" element={<Carrito user={usuario}  />}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/productos/:id" element={<CardProducto/>} />
          <Route path='/login' element={<Login user={usuario} admin={admin} setUser={setearUser} setAdmin={setearAdmin}/>}/>
          <Route path='/admin' element={admin ? <Admin/> : <Navigate to={'/login'} replace />}/>
        </Routes>
      </div>
    </Router>
  </>
  )
}

export default App



