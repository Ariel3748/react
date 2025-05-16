import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EquipoLabs from './components/EquipoLabs'
import TarjetaProyecto from './components/TarjetaProyecto'
import GaleriaIntereses from './components/GaleriaIntereses'

const equipoLab = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://avatarfiles.alphacoders.com/375/thumb-350-375836.webp' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://avatarfiles.alphacoders.com/260/thumb-350-260.webp' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://avatarfiles.alphacoders.com/375/thumb-350-375837.webp' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://avatarfiles.alphacoders.com/133/thumb-350-1335.webp' },
]

const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js','Python'];



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EquipoLabs
      array = {equipoLab}
      />
      <TarjetaProyecto
      titulo="Plataforma de Gestión"
      descripcion="Una herramienta para optimizar la gestión de equipos."
      botonTexto="Explorar proyecto"
      />
      <GaleriaIntereses
      array = {intereses}
      />
    </>
  )
}

export default App
