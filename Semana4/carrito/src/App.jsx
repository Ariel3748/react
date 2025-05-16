import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import ProductosDisponibles from './components/ProductosDisponibles'
import Carrito from './components/carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { useEffect } from 'react'
import Home from './layouts/Home'


/*const productos = [
  {
    "id": 1,
    "titulo": "Mbeyú Tradicional",
    "descripcion": "Delicioso mbejú crocante por fuera y suave por dentro.",
    "precio": 120,
    "imagen": "https://via.placeholder.com/150?text=Mbeyu"
  },
  {
    "id": 2,
    "titulo": "Chipa Guazú",
    "descripcion": "Tarta paraguaya a base de maíz tierno y queso.",
    "precio": 150,
    "imagen": "https://via.placeholder.com/150?text=Chipa+Guazu"
  },
  {
    "id": 3,
    "titulo": "Sopa Paraguaya",
    "descripcion": "La única sopa sólida del mundo, con queso y maíz.",
    "precio": 140,
    "imagen": "https://via.placeholder.com/150?text=Sopa+Paraguaya"
  },
  {
    "id": 4,
    "titulo": "Empanadas de Mandioca",
    "descripcion": "Empanadas fritas con masa de mandioca rellenas de carne.",
    "precio": 90,
    "imagen": "https://via.placeholder.com/150?text=Empanadas"
  },
  {
    "id": 5,
    "titulo": "Chipa al Horno",
    "descripcion": "Panecillo típico a base de almidón de mandioca y queso.",
    "precio": 80,
    "imagen": "https://via.placeholder.com/150?text=Chipa"
  },
  {
    "id": 6,
    "titulo": "Milanesa de Soja",
    "descripcion": "Opción vegetariana con sabor casero.",
    "precio": 110,
    "imagen": "https://via.placeholder.com/150?text=Milanesa+Soja"
  },
  {
    "id": 7,
    "titulo": "Ensalada Mixta",
    "descripcion": "Ensalada fresca con tomate, lechuga y cebolla.",
    "precio": 60,
    "imagen": "https://via.placeholder.com/150?text=Ensalada"
  },
  {
    "id": 8,
    "titulo": "Pastel Mandi'o",
    "descripcion": "Pastel típico frito relleno de carne o queso.",
    "precio": 70,
    "imagen": "https://via.placeholder.com/150?text=Pastel+Mandio"
  },
  {
    "id": 9,
    "titulo": "Tereré con Hierbas",
    "descripcion": "Refrescante bebida paraguaya con hierbas medicinales.",
    "precio": 50,
    "imagen": "https://via.placeholder.com/150?text=Terere"
  },
  {
    "id": 10,
    "titulo": "Torta de Miel",
    "descripcion": "Postre casero hecho con miel de caña.",
    "precio": 130,
    "imagen": "https://via.placeholder.com/150?text=Torta+Miel"
  }
]*/


function App() {
  const[carrito, setCarrito] = useState([])
  


  const agregarAlCarrito = (producto,cantidad) => {
    setCarrito([...carrito, producto, cantidad]);
  };

  console.log(carrito)



  
  return (
    <>


    
    <Nav/>
    <Home/>
    <ProductosDisponibles
      agregarAlCarrito={agregarAlCarrito}
    />
    <Carrito
      carrito = {carrito}
    />
   


    </>
  )
}

export default App
