import React from 'react'
import'./Styles/Home.css'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='principal'>
    <Navbar/>
    <h1 id='titulo'>Bem vindo ao HortiOnline</h1>
    <p className='texto'>
      Aqui no HortiOnline, nossa missão é levar o frescor do campo diretamente para a sua mesa. Trabalhamos com os melhores produtores para garantir frutas, verduras e legumes sempre fresquinhos, com qualidade e sabor incomparáveis.
      

Explore nosso site e descubra como é fácil cuidar da sua saúde e praticidade no dia a dia. Oferecemos uma experiência rápida, segura e cheia de carinho, porque entendemos que a sua família merece o melhor.

HortiOnline: o frescor que você confia, onde você estiver. 🌱

Comece agora e aproveite nossas ofertas exclusivas! 🛒</p>
    <div>
      
      <img src="https://files.oaiusercontent.com/file-CoDG2DJBtoFrigFyf9PbH9?se=2024-11-23T20%3A00%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D96f95063-f2a0-46c8-b2c3-515a6f86724d.webp&sig=i2V9UmhlILCuNDyIv1xIpEydy3qqJv4J4qfUcwuuc7Q%3D" className='imagem1'/>
      
      
    
    </div>
    

    <h2>Oferta do dia!</h2>
    <h3>Banana NANICA! R$ 2.99 a unidade!</h3>
    
    <img src="https://www.hortifrutiorganico.com.br/121-large_default/banana-organica-prata-1-kg.jpg" className='imagem2'/>
    
    
    </div> 
  )
}

export default Home