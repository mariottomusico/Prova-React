import React from 'react'
import'./Botao.css'

function Botao({text}) {
  return (
    <div>
      <button className='btn'>{text}</button>
    </div>
  )
}

export default Botao
