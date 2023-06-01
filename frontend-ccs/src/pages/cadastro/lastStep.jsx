import React from "react";

// import { Container } from './styles';

const LastStep = ({data, updateFieldHandler}) => {
  return (
    <>
      <label>Nome completo</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeUsuario"
        placeholder="Digite o nome da empresa"
        required
        value={data.nomeUsuario || ""}
        onChange={(e) => updateFieldHandler("nomeUsuario", e.target.value)}
      />

      <label>CPF</label>
      <input
        className="campo-texto"
        type="text"
        name="cpfUsuario"
        placeholder="Digite o cnpj da empresa"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", e.target.value)}
      />

      <label>Email</label>
      <input
        className="campo-texto"
        type="text"
        name="emailUsuario"
        placeholder="Digite o cep da empresa"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
      />

      <label>Senha</label>
      <input
        className="campo-texto"
        type="password"
        name="senha"
        placeholder="Digite o endereco da empresa"
        required
        value={data.senha || ""}
        onChange={(e) => updateFieldHandler("senha", e.target.value)}
      />

      <label>Comfirmar senha</label>
      <input
        className="campo-texto"
        type="password"
        name="confirmaSenha"
        placeholder="Digite o email da empresa"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
      />
    </>
  );
}

export default LastStep;
