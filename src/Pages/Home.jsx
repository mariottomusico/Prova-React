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
      
      <img src="https://images.vexels.com/content/181768/preview/kiwifruit-hand-drawn-a34202.png" className='imagem1'/>
      
      
    
    </div>
    

    <h2>Oferta do dia!</h2>
    <h3>Banana NANICA! R$ 2.99 a unidade!</h3>
    
    <img src="https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg" className='imagem2'/>
    
    
    </div> 
  )
}

export default Home