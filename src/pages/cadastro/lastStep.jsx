import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { validateNomeUsuario, validateCpf, validateEmail, validateSenha, validateSenha2 } from './funcoes/funcao'

// import { Container } from './styles';

const LastStep = ({data, updateFieldHandler}) => {

  const [validacao, setValidacao] = useState({
    "nomeUsuario": false,
    "cpf": false,
    "email": false,
    "senha": false,
    "senha2": false,
  });

  function atualizarValidacao(campo, valido) {
    const novaValidacao = { ...validacao };
    novaValidacao[campo] = valido;
    setValidacao(novaValidacao);
  }

  return (
    <>
      <label>Nome completo</label>
      <input
        id="name-field"
        className={validacao.nomeUsuario ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="nomeUsuario"
        placeholder="Digite seu nome completo"
        required
        value={data.nomeUsuario || ""}
        onChange={(e) => updateFieldHandler("nomeUsuario", e.target.value)}
        onKeyUp={(e) => validateNomeUsuario(e.target.value, atualizarValidacao)}
      />

      <label>CPF</label>
      <IMaskInput
        className={validacao.cpf ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="cpfUsuario"
        maxLength={11}
        // mask="000.000.000-00"
        placeholder="Digite seu CPF"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", e.target.value)}
        onKeyUp={(e) => validateCpf(e.target.value, atualizarValidacao)}
      />

      <label>Email</label>
      <input
        className={validacao.email ? "campo-texto-correct" : "campo-texto"}
        type="email"
        name="emailUsuario"
        placeholder="empresa@gmail.com"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
        onKeyUp={(e) => validateEmail(e.target.value, atualizarValidacao)}
      />

      <label>Senha</label>
      <input
        className={validacao.senha ? "campo-texto-correct" : "campo-texto"}
        type="password"
        name="senha"
        minLength={8}
        placeholder="Mínimo de 8 caracteres"
        required
        value={data.senha || ""}
        onChange={(e) => updateFieldHandler("senha", e.target.value)}
        onKeyUp={(e) => validateSenha(e.target.value, atualizarValidacao)}
      />

      <label>Confirmar senha</label>
      <input
        className={validacao.senha2 ? "campo-texto-correct" : "campo-texto"}
        type="password"
        name="confirmaSenha"
        placeholder="Confirmar senha"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
        onKeyUp={(e) => validateSenha2(e.target.value, atualizarValidacao)}
      />
    </>
  );
}

export default LastStep;
