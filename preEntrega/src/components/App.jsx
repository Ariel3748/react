import { useContext, useEffect, useState } from 'react'
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
import { useAuthContext } from '../context/AuthContext'
import FormularioProducto from './FormularioProducto'
import EditarProducto from './EditarProducto'
import Footer from './Footer'
function App() {
  
  const {verificarLogueo} = useAuthContext()

  useEffect(()=>{
    verificarLogueo()
  },[])

  return (
  <>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Productos' element={<ContainerProductos/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/productos/:id" element={<CardProducto/>} />
          <Route path='/login' element={<Login />}/>
          <Route path ='/admin/agregarProducto' element={<FormularioProducto/>}/>
          <Route path ='/admin/editarProducto/:id' element={<EditarProducto/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  </>
  )
}

export default App



