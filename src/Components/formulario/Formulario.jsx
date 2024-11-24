import React from 'react'
import'./Formulario.css'
import Input from './input'
import Select from './select'
import Botao from './Botao'

function Formulario() {
  return (
    <form className='form'>
      <Input 
      type="text"
      text="nome"
      name="name"
      placeholder="insira o seu nome"
      />
       <Input 
      type="number"
      text="cnpj"
      name="cnpj"
      placeholder="insira o seu cnpj"
      />
       <Input 
      type="number"
      text="telefone"
      name="telefone"
      placeholder="insira o seu telefone"
      />
       <Input 
      type="text"
      text="email"
      name="email"
      placeholder="insira o email da sua empresa"
      />
      <Select name="tipo_da_empresa"
      text="selecione o tipo da sua empresa "/>
      <Botao text="cadastrar"/>
      
    </form>

  )
}

export default Formulario
