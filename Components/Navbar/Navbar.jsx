import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        
            
        <Link className='link' to="/">Home</Link>
        
        
        <Link className='link' to="/Sobre">Sobre</Link>
    
        
        <Link className='link' to="/Produtos">Produtos</Link>
        
        
        <Link className='link' to="/Cadastro">Cadastro</Link>

    </nav>
  )
}

export default Navbar