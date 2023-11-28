import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import InputMask from 'react-input-mask';

// import { Container } from './styles';

const LastStep = ({data, updateFieldHandler}) => {


  const removeNonNumericChars = (value) => {
    return value.replace(/\D/g, '');
  };

  return (
    <>
      <label>Nome Completo</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeUsuario"
        placeholder="Digite o seu nome completo"
        required
        value={data.nomeUsuario || ""}
        onChange={(e) => updateFieldHandler("nomeUsuario", e.target.value)}
      />

      <label>CPF</label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cpfUsuario"
        mask="999.999.999-99"
        placeholder="Digite o seu CPF"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", removeNonNumericChars(e.target.value))}
      />

      <label>E-mail</label>
      <input
        className="campo-texto"
        type="email"
        name="emailUsuario"
        placeholder="usuario@gmail.com"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
      />

      <label>Senha</label>
      <input
        className="campo-texto"
        type="password"
        name="senha"
        minLength={8}
        placeholder="Mínimo de 8 caracteres"
        required
        value={data.senha || ""}
        onChange={(e) => updateFieldHandler("senha", e.target.value)}
      />

      <label>Confirmar Senha</label>
      <input
        className="campo-texto"
        type="password"
        name="confirmaSenha"
        placeholder="Confirme a sua senha"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
      />
    </>
  );
}

export default LastStep;
