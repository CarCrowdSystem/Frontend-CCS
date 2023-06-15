// First STEP

export function validateNome2(nome, atualizarValidacao) {
  if (nome.length < 3 || nome === null || nome === "") {
    console.log("nome inválido");    
    atualizarValidacao("nome", false);
  } else {
    console.log("nome válido");
    atualizarValidacao("nome", true);
  }
}

export function validateCnpj(cnpj, atualizarValidacao) {
  //var cnpjValidate = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

  // var er = /[^a-zA-Z0-9]/g;
  // cnpj = cnpj.replace(er, "");

  if (cnpj.length < 14 || cnpj === null || cnpj === "") {
    console.log("cnpj inválido");
    atualizarValidacao("cnpj", false);
  } else {
    console.log("cnpj válido");
    atualizarValidacao("cnpj", true);
  }
}

export function validateCep(cep, atualizarValidacao) {
  // var er = /[^a-zA-Z0-9]/g;
  // cep = cep.replace(er, "");

  if (cep.length < 7 || cep === null || cep === "") {
    console.log("cep inválido");
    atualizarValidacao("cep", false);
  } else {
    console.log("cep válido");
    atualizarValidacao("cep", true);
  }
}

export function validateNum(num, atualizarValidacao) {
  if (num < 1 || num === null || num === "") {
    console.log("número inválido");
    atualizarValidacao("num", false);
  } else {
    console.log("número válido");
    atualizarValidacao("num", true);
  }
}

export function validateTelefone(telefone, atualizarValidacao) {
  //var telValidate = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})"

  // var er = /[^a-zA-Z0-9]/g;
  // telefone = telefone.replace(er, "");

  if (telefone.length < 10 || telefone === null || telefone === "") {
    console.log("telefone inválido");
    atualizarValidacao("telefone", false);
  } else {
    console.log("telefone válido");
    atualizarValidacao("telefone", true);
  }
}

// Last STEP

export function validateVagas(vagas, atualizarValidacao) {
  if (vagas < 1 || vagas === null || vagas === "") {
    console.log("vagas inválido");
    atualizarValidacao("vagas", false);
  } else {
    console.log("vagas válido");
    atualizarValidacao("vagas", true);
  }
}

export function validateNomeUsuario(nome, atualizarValidacao) {
  if (nome.length < 3 || nome === null || nome === "") {
    console.log("nome inválido");
    atualizarValidacao("nomeUsuario", false);
  } else {
    console.log("nome válido");
    atualizarValidacao("nomeUsuario", true);
  }
}

export function validateCpf(cpf, atualizarValidacao) {
  // var cpfValidate = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

  // var er = /[^a-zA-Z0-9]/g;
  // cpf = cpf.replace(er, "");

  if (cpf.length < 11 || cpf === null || cpf === "") {
    console.log("cpf inválido");
    atualizarValidacao("cpf", false);
  } else {
    console.log("cpf válido");
    atualizarValidacao("cpf", true);
  }
}

export function validateEmail(email, atualizarValidacao) {
  if (
    !(email.length >= 8 && email.indexOf("@") !== -1 && email.endsWith(".com"))
  ) {
    console.log("email inválido");
    atualizarValidacao("email", false);
  } else {
    console.log("email válido");
    atualizarValidacao("email", true);
  }
}

var senha1;

export function validateSenha(senha, atualizarValidacao) {
  if (senha.length < 8) {
    console.log("senha inválido");
    atualizarValidacao("senha", false);
  } else {
    console.log("senha válido");
    atualizarValidacao("senha", true);
    senha1 = senha;
  }
}

export function validateSenha2(senha, atualizarValidacao) {
  if (senha === senha1) {
    console.log("senha inválido");
    atualizarValidacao("senha2", false);
  } else {
    console.log("senha válido");
    atualizarValidacao("senha2", true);
  }
}