import React, { useState, useEffect } from 'react';
import './DadosClienteCheckin.css'
import api from '../../../api';
import Swal from "sweetalert2";

// import { Container } from './styles';

const formTemplate = {
  nomeCliente: "",
  email: "",
  senha: "0000",
  marca: "",
  modelo: "",
  placa: "",
}

function DadosClienteCheckin({ fecharModal }) {

const [data, setData] = useState(formTemplate);
const postteFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [errorMessages, setErrorMessages] = useState({
    placaError: "",
    nomeError: "",
    emailError: "",
    marcaError: "",
    modeloError: "",
  });

  const validateCadastro = () => {
    const errors = {};

    if (!data.placa || data.placa.length < 6 || !/\d/.test(data.placa) || !/[a-zA-Z]/.test(data.placa)) {
      errors.placaError = "Placa inválida";
    }
    if (!data.nomeCliente || data.nomeCliente.length < 3) {
      errors.nomeError = "Nome do cliente muito curto!";
    }
    if (!data.email || data.email.indexOf("@") == -1) {
      errors.emailError = "E-mail invalido.";
    }
    if (!data.marca) {
      errors.marcaError = "Marca inválida";
    }
    if (!data.modelo) {
      errors.modeloError = "Modelo inválido";
    }
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  }

  function realizarCadastroVeiculo() {

    if (validateCadastro()) {
      Swal.fire({
        title: "Verfificando cadastro do cliente",
        timerProgressBar: true,
        customClass: {
          container: 'custom-swal-container',
        },
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          const swalContainer = document.querySelector('.custom-swal-container');
          if (swalContainer) {
            swalContainer.style.zIndex = '10000';
          }
        },
      });
      const postVeiculo = {
        nomeCliente: data.nomeCliente,
        email: data.email,
        senha: data.senha,
        marca: data.marca,
        modelo: data.modelo,
        placa: data.placa,
      };
      api
        .post(`/veiculo`, postVeiculo)
        .then((response) => {
            Swal.close()
            fecharModal()
            Swal.fire({
              title: "Cadastrado com sucesso!",
              icon: "success",
              confirmButtonColor: "#ff8000",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ok",
            });
        })
        .catch((error) => {
          console.log(error.response)
          Swal.close()
          Swal.fire({
            title: "Erro ao fazer checkin!",
            text: (error.response.data.message) ? error.response.data.message : error.response.data,
            icon: "error",
            confirmButtonColor: "#ff8000",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          });
          console.log(error)
        })

      console.log(postVeiculo)
    } else {
      var sla = generateErrorMessage(errorMessages)
      console.log(sla)
      Swal.fire({
        title: "Erro ao realizar cadastro",
        text: sla,
        timer: "8000",
        icon: "error",
        confirmButtonColor: "#ff8000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
    }

  }

  const generateErrorMessage = (errors) => {
    return Object.values(errors).filter(msg => msg).join(',\n');
  };

  useEffect(() => {
    console.log(errorMessages)
    validateCadastro()
    generateErrorMessage(errorMessages)
  }, [data]);


  return (
    <>
      <div className='div-pai-checkin-cliente'>
        <div className='div-title-dados-cliente'>
          <h1 className='title-dados-cliente'>Dados do cliente</h1>
        </div>
        <center><h3 style={{ marginTop: "3vh", color: "red", fontSize: "16px" }}>Peça ao cliente que troque a senha padrão "0000" no aplicativo</h3></center>
        <div className='form-dados-cadastro-checkin'>
          <div className='div-label-checkin'>
            <label className='label-checkin' htmlFor="">Nome:</label>
            <label className='label-checkin' htmlFor="">Email:</label>
            {/* <label className='label-checkin' htmlFor="">Senha:</label> */}
            <label className='label-checkin' htmlFor="">Marca:</label>
            <label className='label-checkin' htmlFor="">Modelo:</label>
            <label className='label-checkin' htmlFor="">Placa:</label>
          </div>
          <div className='div-inputs-checkin'>
            <input className="input-checkin"
              type="text"
              name="nomeCliente"
              required
              value={data.nomeCliente || ""}
              placeholder='Nome Completo'
              onChange={(e) =>
                postteFieldHandler("nomeCliente", e.target.value)
              } />
            <input className="input-checkin"
              type="text"
              name="email"
              placeholder='seuemail@gmail.com'
              required
              value={data.email || ""}
              onChange={(e) =>
                postteFieldHandler("email", e.target.value)
              } />
            {/*                     <input className="input-checkin"
                        type="text"
                        name="senha"
                        required
                        value={data.senha || ""}
                        onChange={(e) =>
                        postteFieldHandler("senha", e.target.value)
                    }/> */}
            <input className="input-checkin"
              type="text"
              name="marca"
              placeholder='Ex: Mitsubishi'
              required
              value={data.marca || ""}
              onChange={(e) =>
                postteFieldHandler("marca", e.target.value)
              } />
            <input className='input-checkin'
              type="text"
              name="modelo"
              placeholder='Ex: Lancer GT'
              required
              value={data.modelo || ""}
              onChange={(e) =>
                postteFieldHandler("modelo", e.target.value)
              } />
            <input className='input-checkin'
              type="text"
              name="placa"
              placeholder="Apenas números e letras"
              required
              maxLength={7}
              value={data.placa || ""}
              onChange={(e) =>
                postteFieldHandler("placa", e.target.value)
              } />
          </div>
        </div>
        <div className='div-botao-cadastro-cliente-checkin'>
          <button className='button-cadastrar-checkin' onClick={realizarCadastroVeiculo}>Cadastrar</button>
        </div>
      </div>

    </>
  );
}

export default DadosClienteCheckin;