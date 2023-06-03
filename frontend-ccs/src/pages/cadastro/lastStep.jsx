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
        placeholder="Digite seu nome completo"
        required
        value={data.nomeUsuario || ""}
        onChange={(e) => updateFieldHandler("nomeUsuario", e.target.value)}
      />

      <label>CPF</label>
      <input
        className="campo-texto"
        type="text"
        name="cpfUsuario"
        placeholder="000.000.000-00"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", e.target.value)}
      />

      <label>Email</label>
      <input
        className="campo-texto"
        type="text"
        name="emailUsuario"
        placeholder="empresa@gmail.com"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
      />

      <label>Senha</label>
      <input
        className="campo-texto"
        type="password"
        name="senha"
        placeholder="Mínimo de 8 caracteres"
        required
        value={data.senha || ""}
        onChange={(e) => updateFieldHandler("senha", e.target.value)}
      />

      <label>Comfirmar senha</label>
      <input
        className="campo-texto"
        type="password"
        name="confirmaSenha"
        placeholder="Repita a senha"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
      />
    </>
  );
}

export default LastStep;
