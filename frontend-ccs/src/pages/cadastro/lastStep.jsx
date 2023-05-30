import React from "react";

// import { Container } from './styles';

function LastStep() {
  return (
    <>
      <label>Nome completo</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
      />

      <label>CPF</label>
      <input
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        placeholder="Digite o cnpj da empresa"
        required
      />

      <label>Email</label>
      <input
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        placeholder="Digite o cep da empresa"
        required
      />

      <label>Senha</label>
      <input
        className="campo-texto"
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o endereco da empresa"
        required
      />

      <label>Comfirmar senha</label>
      <input
        className="campo-texto"
        type="text"
        name="emailEmpresa"
        placeholder="Digite o email da empresa"
        required
      />
    </>
  );
}

export default LastStep;
