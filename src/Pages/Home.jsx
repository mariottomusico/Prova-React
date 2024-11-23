import React from 'react'
import'./Styles/Home.css'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <h1>Bem vindo ao xxxxxx</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis alias, odit quo voluptatem deleniti soluta eum dolores accusantium. Quaerat, vero adipisci? Inventore dicta ipsa mollitia, dolorem in minus porro ea temporibus. Voluptate, atque! Doloremque exercitationem quia provident fugit rerum commodi cupiditate, cumque impedit doloribus sequi, non atque repudiandae magni. Consequuntur voluptatum nihil saepe eos nobis vitae nostrum error neque nulla quas magnam dignissimos nisi impedit accusantium repellendus ratione illum eaque distinctio, eum odit obcaecati dicta ad ea accusamus! Placeat officiis expedita harum accusamus labore fuga architecto praesentium ipsum natus molestias amet saepe ex corrupti vel rerum animi, laudantium nostrum!</p>
    <div>
      <section id='imagem1'>
      <img src="https://img.freepik.com/fotos-gratis/uvas-morangos-abacaxi-kiwi-damasco-banana-e-abacaxi-inteiro_23-2147968680.jpg"/>
      </section>
    
    </div>
    

    <h2>Oferta do dia!</h2>
    <section id='imagem2'>
    <img src="https://www.hortifrutiorganico.com.br/121-large_default/banana-organica-prata-1-kg.jpg"/>
    </section>
    
    </>
  )
}

export default Home