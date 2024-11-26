import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produto'
import Cadastro from './Pages/Cadastro'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path ="/" element={<Home/>} />
            <Route exact path ="/Sobre" element={<Sobre/>} />
            <Route exact path ="/Produtos" element={<Produtos/>} />
            <Route exact path ="/Cadastro" element={<Cadastro/>} />
        </Routes>
    </Router>
    
  )
}

export default App