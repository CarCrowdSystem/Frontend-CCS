import React, { useState } from "react";
import InputMask from 'react-input-mask';

const LastStep = ({data, updateFieldHandler}) => {

  const [errorMessages, setErrorMessages] = useState({
    nomeUsuario: "",
    cpfUsuario: "",
    emailUsuario: "",
    senha: "",
    confirmaSenha: "",
  });

  const removeNonNumericChars = (value) => {
    return value.replace(/\D/g, '');
  };

  const validateLastStep = () => {

    const errors = {};

    if (!data.nomeUsuario || data.nomeUsuario.length <= 2) {
      errors.nomeUsuario = "Por favor, preencha o nome completo.";

    }
  
    if (!data.cpfUsuario || removeNonNumericChars(data.cpfUsuario).length !== 11) {
      errors.cpfUsuario = "Por favor, insira um CPF válido.";

    }
  
    if (!data.emailUsuario || data.emailUsuario.indexOf("@") == -1) {
      errors.emailUsuario = "Por favor, insira um e-mail válido.";

    }
  
    if (!data.senha || data.senha.length < 8) {
      errors.senha = "A senha deve ter pelo menos 8 caracteres.";

    }
  
    if (data.senha !== data.confirmaSenha) {
      errors.confirmaSenha = "As senhas não coincidem.";
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  
  };
  
  return (
    <>
      <label>Nome completo<span className="error-message">{errorMessages.nomeUsuario}</span></label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeUsuario"
        placeholder="Digite seu nome completo"
        required
        value={data.nomeUsuario || ""}
        onChange={(e) => updateFieldHandler("nomeUsuario", e.target.value)}
        onKeyUp={validateLastStep}
      />

      <label>CPF<span className="error-message">{errorMessages.cpfUsuario}</span></label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cpfUsuario"
        mask="999.999.999-99"
        placeholder="Digite seu CPF"
        required
        value={data.cpfUsuario || ""}
        onChange={(e) => updateFieldHandler("cpfUsuario", removeNonNumericChars(e.target.value))}
        onKeyUp={validateLastStep}
      />

      <label>Email<span className="error-message">{errorMessages.emailUsuario}</span></label>
      <input
        className="campo-texto"
        type="email"
        name="emailUsuario"
        placeholder="empresa@gmail.com"
        required
        value={data.emailUsuario || ""}
        onChange={(e) => updateFieldHandler("emailUsuario", e.target.value)}
        onKeyUp={validateLastStep}
      />

      <label>Senha<span className="error-message">{errorMessages.senha}</span></label>
      <input
        className="campo-texto"
        type="password"
        name="senha"
        minLength={8}
        placeholder="Mínimo de 8 caracteres"
        required
        value={data.senha || ""}
        onChange={(e) => updateFieldHandler("senha", e.target.value)}
        onKeyUp={validateLastStep}
      />

      <label>Confirmar senha<span className="error-message">{errorMessages.confirmaSenha}</span></label>
      <input
        className="campo-texto"
        type="password"
        name="confirmaSenha"
        placeholder="Confirmar senha"
        required
        value={data.confirmaSenha || ""}
        onChange={(e) => updateFieldHandler("confirmaSenha", e.target.value)}
        onKeyUp={validateLastStep}
      />
    </>
  );
}

export default LastStep;
