import React, { useState } from 'react';
import './DadosClienteCheckin.css'
import api from '../../../api';
import Swal from "sweetalert2";

// import { Container } from './styles';

const formTemplate = {
    nomeCliente: "",
    email: "",
    senha: "",
    marca: "",
    modelo: "",
    placa: "",
}

function DadosClienteCheckin({fecharModal}) {

const [data, setData] = useState(formTemplate);
const postteFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    };

    function realizarCadastroVeiculo(){
        Swal.fire({
            title: "Realizando cadastro do cliente",
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
        .then((response)=>{
            Swal.close()
            Swal.fire({
                title: "Cadastrado com sucesso!",
                icon: "success",
                confirmButtonColor: "#ff8000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok",
              });
              fecharModal()
        })
        .catch((error)=>{
            console.log(error.response)
            Swal.close()
            Swal.fire({
                title: "Erro ao fazer checkin!",
                text: (error.response.data.message)?error.response.data.message : error.response.data ,
                icon: "error",
                confirmButtonColor: "#ff8000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok",
              });
          console.log(error)
        })

        console.log(postVeiculo)
      }


  return (
    <>
        <div className='div-pai-checkin-cliente'>
            <div className='div-title-dados-cliente'>
                <h1 className='title-dados-cliente'>Dados do cliente</h1>
            </div>
            <div className='form-dados-cadastro-checkin'>
                <div className='div-label-checkin'>
                    <label className='label-checkin' htmlFor="">Nome:</label>
                    <label className='label-checkin' htmlFor="">Email:</label>
                    <label className='label-checkin' htmlFor="">Senha:</label>
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
                        onChange={(e) =>
                        postteFieldHandler("nomeCliente", e.target.value)
                    }/>
                    <input className="input-checkin"
                        type="text"
                        name="email"
                        required
                        value={data.email || ""}
                        onChange={(e) =>
                        postteFieldHandler("email", e.target.value)
                    }/>
                    <input className="input-checkin"
                        type="text"
                        name="senha"
                        required
                        value={data.senha || ""}
                        onChange={(e) =>
                        postteFieldHandler("senha", e.target.value)
                    }/>
                    <input className="input-checkin"
                        type="text"
                        name="marca"
                        required
                        value={data.marca || ""}
                        onChange={(e) =>
                        postteFieldHandler("marca", e.target.value)
                    }/>
                    <input className='input-checkin'
                        type="text"
                        name="modelo"
                        required
                        value={data.modelo || ""}
                        onChange={(e) =>
                        postteFieldHandler("modelo", e.target.value)
                    }/>
                    <input className='input-checkin'
                        type="text"
                        name="placa"
                        required
                        value={data.placa || ""}
                        onChange={(e) =>
                        postteFieldHandler("placa", e.target.value)
                    }/>
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