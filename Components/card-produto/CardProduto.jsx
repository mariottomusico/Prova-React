import React from 'react'
import "./CardProduto.css"

const CardProduto = ({img, nome, descricao, preco}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <p>{preco}</p>
    </div>
  )
}

export default CardProduto