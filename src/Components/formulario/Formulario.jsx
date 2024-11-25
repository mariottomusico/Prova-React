import React, { useState } from 'react';
import './Formulario.css';
import Input from './Input';
import Select from './Select';
import Botao from './Botao';
import axios from 'axios';

// Função de validação dos CPF e CNPJ
const validDigits = (text) => text.replace(/[^0-9,]/g, "");
const validEmail = (text) => text.replace(/[^a-zA-Z0-9@._-]/g, "");

const validCpf = async (cpf, setStatusCpf) => {
  try {
    let url = `https://api.invertexto.com/v1/validator?type=cpf&cpf=${cpf}`;
    const response = await axios.get(url);
    if (response.data.valid) {
      setStatusCpf("CPF válido!");
    } else {
      setStatusCpf("CPF inválido!");
    }
  } catch (error) {
    console.log(error);
    setStatusCpf("Erro ao validar o CPF");
  }
};

// Função de limpar os campos dos formulários
const clearForm = (e, setNome, setCpf, setTelefone, setEmail) => {
  e.preventDefault();
  setNome("");
  setCpf("");
  setTelefone("");
  setEmail("");
};

const Formulario = () => {
  const [activeForm, setActiveForm] = useState('');  // Estado para controlar qual formulário está ativo
  const [statusCpf, setStatusCpf] = useState("");   // Estado para o status da validação do CPF

  // Estados para o formulário de cliente
  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");

  // Estados para o formulário de fornecedor
  const [nomeFornecedor, setNomeFornecedor] = useState("");
  const [cnpjFornecedor, setCnpjFornecedor] = useState("");
  const [telefoneFornecedor, setTelefoneFornecedor] = useState("");
  const [emailFornecedor, setEmailFornecedor] = useState("");

  // Função para alternar entre os formulários
  const showOrHide = (elemento) => {
    setActiveForm(elemento);  // Muda o estado do formulário ativo
  };

  return (
    <div className='container-cadastro'>
      <h1>Cadastro</h1>
      <div className='botoes'>
        <button onClick={() => showOrHide("cliente")}>Cliente</button>
        <button onClick={() => showOrHide("fornecedor")}>Fornecedor</button>
      </div>

      {/* Formulário Cliente */}
      {activeForm === 'cliente' && (
        <div id='container-cliente'>
          <form className="Cliente">
            <Input
              type="text"
              text="nome"
              name="name"
              placeholder="insira o seu nome"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(validDigits(e.target.value))}
            />
            <Input
              type="number"
              text="cpf"
              name="cpf"
              placeholder="insira o seu cpf"
              value={cpfCliente}
              onChange={(e) => setCpfCliente(validDigits(e.target.value))}
            />
            <Input
              type="number"
              text="telefone"
              name="telefone"
              placeholder="insira o seu telefone"
              value={telefoneCliente}
              onChange={(e) => setTelefoneCliente(validDigits(e.target.value))}
            />
            <Input
              type="text"
              text="email"
              name="email"
              placeholder="insira o seu email"
              value={emailCliente}
              onChange={(e) => setEmailCliente(validEmail(e.target.value))}
            />
            <Botao text="cadastrar" action={() => validCpf(cpfCliente, setStatusCpf)} />
            <Botao text="limpar" action={(e) => clearForm(e, setNomeCliente, setCpfCliente, setTelefoneCliente, setEmailCliente)} />
          </form>
        </div>
      )}

      {/* Formulário Fornecedor */}
      {activeForm === 'fornecedor' && (
        <div id='container-fornecedor'>
          <form className="fornecedor">
            <Input
              type="text"
              text="nome"
              name="name"
              placeholder="insira o seu nome"
              value={nomeFornecedor}
              onChange={(e) => setNomeFornecedor(validDigits(e.target.value))}
            />
            <Input
              type="number"
              text="cnpj"
              name="cnpj"
              placeholder="insira o seu cnpj"
              value={cnpjFornecedor}
              onChange={(e) => setCnpjFornecedor(validDigits(e.target.value))}
            />
            <Input
              type="number"
              text="telefone"
              name="telefone"
              placeholder="insira o seu telefone"
              value={telefoneFornecedor}
              onChange={(e) => setTelefoneFornecedor(validDigits(e.target.value))}
            />
            <Input
              type="text"
              text="email"
              name="email"
              placeholder="insira o email da sua empresa"
              value={emailFornecedor}
              onChange={(e) => setEmailFornecedor(validEmail(e.target.value))}
            />
            <Select name="tipo_da_empresa" text="selecione o tipo da sua empresa" />
            <Botao text="cadastrar" action={() => validCpf(cnpjFornecedor, setStatusCpf)} />
            <Botao text="limpar" action={(e) => clearForm(e, setNomeFornecedor, setCnpjFornecedor, setTelefoneFornecedor, setEmailFornecedor)} />
          </form>
        </div>
      )}
    </div>
  );
};

export default Formulario;
