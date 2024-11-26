import React, { useState } from "react";

const CadastroEmpresa = () => {
  const [tipoEmpresa, setTipoEmpresa] = useState(""); // Estado para armazenar o tipo da empresa selecionado

  // Função chamada quando o usuário seleciona uma opção
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setTipoEmpresa(selectedValue);
    console.log("Tipo de empresa selecionado:", selectedValue);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f8d8",
        padding: "15px",
        borderRadius: "5px",
        width: "300px",
      }}
    >
      <label htmlFor="tipoEmpresa">Selecione o tipo da sua empresa :</label>
      <br />
      <select
        id="tipoEmpresa"
        name="tipoEmpresa"
        value={tipoEmpresa}
        onChange={handleSelectChange}
        style={{
          width: "100%",
          margin: "10px 0",
          padding: "5px",
        }}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        <option value="mei">MEI</option>
        <option value="ltda">LTDA</option>
        <option value="ss">SS</option>
        <option value="sa">SA</option>
      </select>
    </div>
  );
};

export default CadastroEmpresa;
