import React, { useState } from 'react';
import './Formulario.css';
import Input from './Input';
import Select from './Select';
import Botao from './Botao';
import axios from 'axios';

// Funções de validação de campos
const validDigits = (text) => text.replace(/[^0-9,]/g, "");
const validNome = (text) => text.replace(/[^a-zA-ZáéíóúãõçÇ\s]/g, "");
const validEmail = (text) => text.replace(/[^a-zA-Z0-9@._-]/g, "");

// Função de validação do CPF
const validCpf = async (cpf, setStatusCpf) => {
  try {
    let url = `https://api.invertexto.com/v1/validator?token=16300%7CF90CvSnbzzuzcpqYoE1FpYtL4QueMFun&value=${cpf}&type=cpf`;
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

// Função de validação do CNPJ
const validCnpj = async (cnpj, setStatusCnpj) => {
  try {
    let url = `https://api.invertexto.com/v1/validator?token=16300%257CF90CvSnbzzuzcpqYoE1FpYtL4QueMFun&value=${cnpj}&type=cnpj`;
    const response = await axios.get(url);
    if (response.data.valid) {
      setStatusCnpj("CNPJ válido!");
    } else {
      setStatusCnpj("CNPJ inválido!");
    }
  } catch (error) {
    console.log(error);
    setStatusCnpj("Erro ao validar o CNPJ");
  }
};

// Função de validação do Email
const validarEmail = async (email) => {
  try {
    let url = `https://api.invertexto.com/v1/email-validator/${email}?token=16300|F90CvSnbzzuzcpqYoE1FpYtL4QueMFun`;
    const response = await axios.get(url);
    if (response.data.valid_format) {
      return true;  // Email válido
    } else {
      return false;  // Email inválido
    }
  } catch (error) {
    console.log(error);
    return false;  // Em caso de erro, retorna false
  }
};

// Função para limpar o formulário
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
  const [statusCnpj, setStatusCnpj] = useState(""); // Estado para o status da validação do CNPJ
  const [statusEmail, setStatusEmail] = useState(""); // Estado para o status da validação do Email

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

  // Função para validar tudo no formulário de cliente
  const validarTudoCliente = async (e) => {
    e.preventDefault();
    
    if (!(await validCpf(cpfCliente, setStatusCpf))) {
      return;
    }

    if (!(await validarEmail(emailCliente))) {
      setStatusEmail("Email inválido!");
      return;
    }

    setStatusEmail("Email válido!");
    alert("Cadastro de cliente concluído!");
    clearForm(e, setNomeCliente, setCpfCliente, setTelefoneCliente, setEmailCliente);
  };

  // Função para validar tudo no formulário de fornecedor
  const validarTudoFornecedor = async (e) => {
    e.preventDefault();

    if (!(await validCnpj(cnpjFornecedor, setStatusCnpj))) {
      return;
    }

    if (!(await validarEmail(emailFornecedor))) {
      setStatusEmail("Email inválido!");
      return;
    }

    setStatusEmail("Email válido!");
    alert("Cadastro de fornecedor concluído!");
    clearForm(e, setNomeFornecedor, setCnpjFornecedor, setTelefoneFornecedor, setEmailFornecedor);
  };

  return (
    <div className='container-cadastro'>
      <h1>Cadastro</h1>
      <div className='botoes'>
        <button onClick={() => showOrHide("cliente")}>Cliente</button>
        <button onClick={() => showOrHide("fornecedor")}>Fornecedor</button>
      </div>

      {/* Exibição do status do CPF, CNPJ e Email */}
      <p>{statusCpf}</p>
      <p>{statusCnpj}</p>
      <p>{statusEmail}</p>

      {/* Formulário Cliente */}
      {activeForm === 'cliente' && (
        <div id='container-cliente'>
          <form className="Cliente">
            <input
              type="text"
              text="nome"
              name="name"
              placeholder="insira o seu nome"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(validNome(e.target.value))}
            />
            <input
              type="number"
              text="cpf"
              name="cpf"
              placeholder="insira o seu cpf"
              value={cpfCliente}
              onChange={(e) => setCpfCliente(validDigits(e.target.value))}
            />
            <input
              type="number"
              text="telefone"
              name="telefone"
              placeholder="insira o seu telefone"
              value={telefoneCliente}
              onChange={(e) => setTelefoneCliente(validDigits(e.target.value))}
            />
            <input
              type="text"
              text="email"
              name="email"
              placeholder="insira o seu email"
              value={emailCliente}
              onChange={(e) => setEmailCliente(validEmail(e.target.value))}
            />
            <button onClick={(e) => validarTudoCliente(e)}>Cadastrar</button>
            <Botao text="limpar" action={(e) => clearForm(e, setNomeCliente, setCpfCliente, setTelefoneCliente, setEmailCliente)} />
          </form>
        </div>
      )}

      {/* Formulário Fornecedor */}
      {activeForm === 'fornecedor' && (
        <div id='container-fornecedor'>
          <form className="fornecedor">
            <input
              type="text"
              text="nome"
              name="name"
              placeholder="insira o nome da sua empresa"
              value={nomeFornecedor}
              onChange={(e) => setNomeFornecedor(validNome(e.target.value))}
            />
            <input
              type="number"
              text="cnpj"
              name="cnpj"
              placeholder="insira o seu cnpj"
              value={cnpjFornecedor}
              onChange={(e) => setCnpjFornecedor(validDigits(e.target.value))}
            />
            <input
              type="number"
              text="telefone"
              name="telefone"
              placeholder="insira o seu telefone"
              value={telefoneFornecedor}
              onChange={(e) => setTelefoneFornecedor(validDigits(e.target.value))}
            />
            <input
              type="text"
              text="email"
              name="email"
              placeholder="insira o email da sua empresa"
              value={emailFornecedor}
              onChange={(e) => setEmailFornecedor(validEmail(e.target.value))}
            />
            <Select name="tipo_da_empresa" text="selecione o tipo da sua empresa" />
            <Botao text="cadastrar" action={(e) => validarTudoFornecedor(e)} />
            <Botao text="limpar" action={(e) => clearForm(e, setNomeFornecedor, setCnpjFornecedor, setTelefoneFornecedor, setEmailFornecedor)} />
          </form>
        </div>
      )}
    </div>
  );
};

export default Formulario;
