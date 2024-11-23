import React from 'react'
import CardProduto from '../Components/card-produto/CardProduto'
import "./Styles/Produto.css"

const Produto = () => {

    const frutas = [
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "melancia",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "maça",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "dfdsfd",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "fdfdsf",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "hfghfg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfgfdgfgdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfkkkkdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfaaadg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfbabbdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfeedg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgrrfdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfnngfdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },
        {
            img: "https://lojazmart.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/m/e/mel_ncia_inteira_zmart.jpg",
            nome: "gfgfsssstdg",
            desc: "Melacia de 4 metros",
            preco: "12.99"
        },

    ]

  return (
    <>
    <h1>Nossos Produtos:</h1>
    <div className='produtos'>
        {frutas.map((fruta) => <CardProduto key={fruta.nome} img={fruta.img} nome={fruta.nome} descricao={fruta.desc} preco={fruta.preco}/>)}
    </div>
    </>
  )
}

export default Produto