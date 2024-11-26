import React from 'react'
import'./Botao.css'

function Botao({text , action}) {
  return (
    <div>
      <button className='btn' onClick={action}>{text}</button>
    </div>
  )
}

export default Botao
