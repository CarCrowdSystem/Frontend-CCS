// First STEP

export function validateNome(nome) {
  if (nome.length < 3 || nome === null || nome === "") {
    console.log("nome inválido");
    returnStatus(false, "nomeEmpresa");
  } else {
    console.log("nome válido");
    returnStatus(true, "nomeEmpresa");
  }
}

export function validateCnpj(cnpj) {
  //var cnpjValidate = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

  var er = /[^a-zA-Z0-9]/g;
  cnpj = cnpj.replace(er, "");

  if (cnpj.length < 13 || cnpj === null || cnpj === "") {
    console.log("cnpj inválido");
    returnStatus(false, "cnpj");
  } else {
    console.log("cnpj válido");
    returnStatus(true, "cnpj");
  }
}

export function validateCep(cep) {
  var er = /[^a-zA-Z0-9]/g;
  cep = cep.replace(er, "");

  if (cep.length < 7 || cep === null || cep === "") {
    console.log("cep inválido");
    returnStatus(false, "cep");
  } else {
    console.log("cep válido");
    returnStatus(true, "cep");
  }
}

export function validateNum(num) {
  if (num < 1 || num === null || num === "") {
    console.log("número inválido");
    returnStatus(false, "num");
  } else {
    console.log("número válido");
    returnStatus(true, "num");
  }
}

export function validateTelefone(telefone) {
  //var telValidate = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})"

  var er = /[^a-zA-Z0-9]/g;
  telefone = telefone.replace(er, "");

  if (telefone.length < 10 || telefone === null || telefone === "") {
    console.log("telefone inválido");
    returnStatus(false, "telefone");
  } else {
    console.log("telefone válido");
    returnStatus(true, "telefone");
  }
}

// Last STEP

export function validateVagas(vagas) {
  if (vagas < 1 || vagas === null || vagas === "") {
    console.log("vagas inválido");
    returnStatus(false, "vagas");
  } else {
    console.log("vagas válido");
    returnStatus(true, "vagas");
  }
}

export function validateNomeUsuario(nome) {
  if (nome.length < 3 || nome === null || nome === "") {
    console.log("nome inválido");
    returnStatus(false, "nomeUsuario");
  } else {
    console.log("nome válido");
    returnStatus(true, "nomeUsuario");
  }
}

export function validateCpf(cpf) {
  // var cpfValidate = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

  var er = /[^a-zA-Z0-9]/g;
  cpf = cpf.replace(er, "");

  if (cpf.length < 10 || cpf === null || cpf === "") {
    console.log("cpf inválido");
    returnStatus(false, "cpf");
  } else {
    console.log("cpf válido");
    returnStatus(true, "cpf");
  }
}

export function validateEmail(email) {
  if (
    !(email.length >= 8 && email.indexOf("@") !== -1 && email.endsWith(".com"))
  ) {
    console.log("email inválido");
    returnStatus(false, "email");
  } else {
    console.log("email válido");
    returnStatus(true, "email");
  }
}

export function validateSenha(senha) {
  if (senha.length < 8) {
    console.log("senha inválido");
    returnStatus(false, "senha");
  } else {
    console.log("senha válido");
    returnStatus(true, "senha");
  }
}

export var statusNome = false;
export var statusCnpj = false;
export var statusCep = false;
export var statusNum = false;
export var statusTelefone = false;
export var statusCpf = false;
export var statusNomeU = false;
export var statusEmail = false;
export var statusSenha = false;
export var statusVaga = false;
// OUTRAS FUNÇÕES

export function returnStatus(status, nomeV) {
  switch (nomeV) {
    case "nomeEmpresa":
      statusNome = status;
      break;
    case "cnpj":
      statusCnpj = status;
      break;
    case "cep":
      statusCep = status;
      break;
    case "num":
      statusNum = status;
      break;
    case "telefone":
      statusTelefone = status;
      break;
    case "vagas":
      statusVaga = status;
      break;
    case "nomeUsuario":
      statusNomeU = status;
      break;
    case "cpf":
      statusCpf = status;
      break;
    case "email":
      statusEmail = status;
      break;
    case "senha":
      statusSenha = status;
      break;
    default:
      console.log("sei lá");
      break;
  }
}
