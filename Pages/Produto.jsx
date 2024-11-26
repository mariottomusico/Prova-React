import React from 'react'
import CardProduto from '../Components/card-produto/CardProduto'
import "./Styles/Produto.css"
import Navbar from '../Components/Navbar/Navbar'



const Produto = () => {
   
  

    const frutas = [
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "Melancia",
            desc: "Melancia tipo Maracatu",
            preco: "R$ 29.99"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg",
            nome: "Maçã",
            desc: "Maçã Gala",
            preco: "R$ 4.99"
        },
        {
            img: "https://coopsp.vtexassets.com/arquivos/ids/232479-800-auto?v=638227937796800000&width=800&height=auto&aspect=true",
            nome: "Banana",
            desc: "Banana Nanica",
            preco: "R$ 5.99"
        },
        {
            img: "https://vasoeflor.cdn.magazord.com.br/img/2023/05/produto/1554/uva-isabel.jpg?ims=fit-in/425x425/filters:fill(white)",
            nome: "Uva",
            desc: "Cacho",
            preco: "R$ 5.00"
        },
        {
            img: "https://zaffari.vtexassets.com/arquivos/ids/263267/1000241-00.jpg?v=638676340864800000",
            nome: "Mamão",
            desc: "Papaya",
            preco: "R$ 7.00"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdyRAcKRXYDtwoV-dv2fuIoTYVZNCM1R57w&s",
            nome: "Abacate",
            desc: "Avocado",
            preco: "R$ 7.99"
        },
        {
            img: "https://www.quitandatomio.com.br/upload/1085343213-beneficios-da-manga-palmer-para-a-saude.jpg",
            nome: "Manga",
            desc: "Palmer",
            preco: "R$ 7.99"
        },
        {
            img: "https://cdn.awsli.com.br/600x1000/496/496853/produto/38094930/d1f50ba827.jpg",
            nome: "Pitaya",
            desc: "Exótica...",
            preco: "R$ 12.99"
        },
        {
            img: "https://cdn.awsli.com.br/600x450/18/18885/produto/1468212/523d6bc1a6.jpg",
            nome: "Fruta do Conde",
            desc: "Direto do mercadão de SP",
            preco: "R$ 13.99"
        },
        {
            img: "https://ceagesp.gov.br/wp-content/uploads/2020/05/ameixacp.jpg",
            nome: "Ameixa",
            desc: "Preta - Unidade",
            preco: "R$ 4.99"
        },
        {
            img: "https://mercadoorganico.com/7789-large_default/limao-siciliano-organico-500g-osm.jpg",
            nome: "Limão",
            desc: "Siciliano",
            preco: "R$ 5.99"
        },
        {
            img: "https://www.hortifrutiorganico.com.br/119-large_default/goiaba-organica-vermelha-500g.jpg",
            nome: "Goiaba",
            desc: "Sato",
            preco: "R$ 6.00"
        },
        {
            img: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/0/100239-pessego-nacional-unidade.jpg",
            nome: "Pêssego",
            desc: "Ágata",
            preco: "R$ 7.99"
        },
        {
            img: "https://hiperideal.vtexassets.com/arquivos/ids/172539/19968.jpg?v=636942411900500000",
            nome: "Laranja",
            desc: "Pêra",
            preco: "R$ 3.99"
        },
        {
            img: "https://scfoods.fbitsstatic.net/img/p/coco-seco-unidade-70711/257229.jpg?w=800&h=800&v=no-change&qs=ignore",
            nome: "Côco",
            desc: "Unidade",
            preco: "R$ 6.00"
        },
        {
            img: "https://images.tcdn.com.br/img/img_prod/350075/muda_de_tamarindo_com_40cm_tamarindeiro_feita_de_semente_5051_1_20220412114217.jpg",
            nome: "Tamarindo",
            desc: "Diretamente do Chaves...",
            preco: "R$ 999.999,99"
        }

    ]

  
    return (
        <div className="fundo">
          <Navbar />
          <div className="hero-content">
            <h1>Nossos Produtos:</h1>
            <div className='produtos'>
              {frutas.map((fruta) => (
                <CardProduto
                  key={fruta.nome}
                  img={fruta.img}
                  nome={fruta.nome}
                  descricao={fruta.desc}
                  preco={fruta.preco}
                />
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Produto