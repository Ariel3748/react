import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import { CarritoProvider } from './context/CarritoContext'
import { AuthProvider } from './context/AuthContext'
import { ProductosProvider } from './context/ProductosContext'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
    <AuthProvider>
    <CarritoProvider>
      <App />
    </CarritoProvider>
    </AuthProvider>
    </ProductosProvider>
  </StrictMode>,
)
