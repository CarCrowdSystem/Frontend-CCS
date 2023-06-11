import React from "react";
import { IMaskInput } from "react-imask";
import { validateNome, validateCpf, validateEmail, validateSenha } from './funcoes/funcao'

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
        onKeyUp={(e) => validateNome(e.target.value)}
      />

      <label>CPF</label>
      <IMaskInput
        className="campo-texto"
        type="text"
        name="cpfUsuario"
        // mask="000.000.000-00"
        placeholder="Digite seu CPF"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", e.target.value)}
        onKeyUp={(e) => validateCpf(e.target.value)}
      />

      <label>Email</label>
      <input
        className="campo-texto"
        type="email"
        name="emailUsuario"
        placeholder="empresa@gmail.com"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
        onKeyUp={(e) => validateEmail(e.target.value)}
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
        onKeyUp={(e) => validateSenha(e.target.value)}
      />

      <label>Confirmar senha</label>
      <input
        className="campo-texto"
        type="password"
        name="confirmaSenha"
        placeholder="Confirmar senha"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
      />
    </>
  );
}

export default LastStep;
