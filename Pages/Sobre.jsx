import React from 'react';
import './Styles/Sobre.css';
import Navbar from '../Components/Navbar/Navbar';

const Sobre = () => {
  return (
    <div className="fundo">
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Um pouco sobre nossa empresa...</h1>
          
          <p className="hero-text">
            A HortiOnline é uma startup brasileira focada em oferecer praticidade e frescor na hora de comprar frutas, legumes e verduras. Fundada em 2024, a empresa nasceu com o propósito de conectar produtores locais a consumidores que buscam alimentos frescos, saudáveis e de alta qualidade, entregues diretamente em suas casas.
          </p>
          <p className="hero-text">
            Nosso principal objetivo é simplificar a vida dos nossos clientes, oferecendo uma solução prática e confiável para o consumo de alimentos saudáveis. Por meio do HortiOnline, promovemos a sustentabilidade, o apoio aos pequenos agricultores e o acesso a uma alimentação nutritiva, valorizando a cadeia de produção local e reduzindo o desperdício.
          </p>
          <p className="hero-text highlight-text">
            Sustentabilidade: Priorizamos práticas sustentáveis, desde a seleção dos fornecedores até a entrega, buscando minimizar impactos ambientais.
          </p>
          <p className="hero-text highlight-text">
            Qualidade: Garantimos alimentos frescos e rigorosamente selecionados, assegurando a satisfação dos nossos clientes.
          </p>
          <p className="hero-text highlight-text">
            Conexão com o Campo: Valorizamos os pequenos produtores e a agricultura familiar, ajudando a fortalecer a economia local.
          </p>
          <p className="hero-text highlight-text">
            Praticidade: Oferecemos uma experiência de compra fácil, rápida e acessível para todas as famílias.
          </p>
          <p className="hero-text highlight-text">
          Transparência: Prezamos por uma comunicação clara e honesta com nossos clientes e parceiros.
          </p>
          <p className="hero-text hero-footer">
            "Do campo para sua casa, com um clique." 🌱
          </p>
        </div>
        <img src="https://images.vexels.com/content/181768/preview/kiwifruit-hand-drawn-a34202.png" alt="Imagem ilustrativa" className="hero-image" />
      </header>

      <section className="daily-offers">
        <h2 className="offers-title">Informações da Empresa</h2>
        <div className="infos">
          <h3 className="infos2">Fundação: Janeiro de 2024</h3>
          <h3 className="infos2">Fundadores: Gabriel Mariotto e Lucas Marçoli</h3>
          <h3 className="infos2">Sede: São Paulo, SP, Brasil</h3>
          <h3 className="infos2">Região de Atendimento: Nacional, com foco inicial na região Sudeste</h3>
          <h3 className="infos2">Número de Fornecedores: 150 agricultores parceiros</h3>
          <h3 className="infos2">Produtos Oferecidos: Mais de 300 variedades de frutas, verduras, legumes, temperos e produtos orgânicos</h3>
          <h3 className="infos2">Meta de Sustentabilidade: Reduzir em 30% o uso de embalagens plásticas até 2025</h3>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
