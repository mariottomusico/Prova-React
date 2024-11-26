import React from 'react';
import './Styles/Home.css';
import Navbar from '../Components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Home = () => {
  const ofertas = [
    { id: 1, nome: 'Banana Nanica', preco: 'R$ 2.99', imagem: 'src/assets/banana.png' },
    { id: 2, nome: 'Maçã Gala', preco: 'R$ 3.49', imagem: 'src/assets/maca.png' },
    { id: 3, nome: 'Laranja Pera', preco: 'R$ 1.99', imagem: 'src/assets/laranja.png' },
  ];

  return (
    <div className="home-container">
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bem vindo ao HortiFrutiOnline</h1>
          
          <p className="hero-text">
            Aqui no HortiOnline, nossa missão é levar o frescor do campo diretamente para a sua mesa.
          </p>
          <p className="hero-text">
            Trabalhamos com os melhores produtores para garantir frutas, verduras e legumes sempre fresquinhos, com qualidade e sabor incomparáveis.
          </p>
          <p className="hero-text">
            Explore nosso site e descubra como é fácil cuidar da sua saúde e praticidade no dia a dia.
          </p>
          <p className="hero-text highlight-text">
            Oferecemos uma experiência rápida, segura e cheia de carinho, porque entendemos que a sua família merece o melhor.
          </p>
          <p className="hero-text hero-footer">
            🌱 Comece agora e aproveite nossas ofertas exclusivas! 🛒
          </p>
        </div>
        <img src="src/assets/imgHome.png" alt="Cesta de frutas frescas" className="hero-image" />
      </header>

      <section className="daily-offers">
        <h2 className="offers-title">Ofertas do dia</h2>
        <Swiper
  spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}
  loop={true}
  modules={[EffectCoverflow, Pagination]}
  effect="coverflow"
  coverflowEffect={{
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }}
  className="offers-carousel"
>
  {ofertas.map((oferta) => (
    <SwiperSlide key={oferta.id} className="offer-slide">
      <div className="discover__card">
        <img src={oferta.imagem} alt={oferta.nome} className="discover__img" />
        <div className="discover__data">
          <h2 className="discover__title">{oferta.nome}</h2>
          <span className="discover__description">{oferta.preco}</span>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </section>
    </div>
  );
};

export default Home;
