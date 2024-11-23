import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produto from './Pages/Produto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produto/>
  </StrictMode>,
)
