import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produto'
import Cadastro from './Pages/Cadastro'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path ="/" element={<Home/>} />
            <Route exact path ="/Sobre" element={<Sobre/>} />
            <Route exact path ="/Produtos" element={<Produtos/>} />
            <Route exact path ="/Cadastro" element={<Cadastro/>} />

        </Routes>
        <Footer/>
    </Router>
    
  )
}

export default App