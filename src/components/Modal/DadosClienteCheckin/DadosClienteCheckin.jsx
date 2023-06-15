import React, { useState } from 'react';
import './DadosClienteCheckin.css'
import api from '../../../api';
import Swal from "sweetalert2";

// import { Container } from './styles';

const formTemplate = {
    placa: "",
    modelo: "",
    nomeCliente: "",
    telefoneCliente: ""
}

function DadosClienteCheckin() {

const [data, setData] = useState(formTemplate);
const postteFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    };

    function realizarCadastroVeiculo(){
        const postVeiculo = {
            placa: data.placa,
            modelo: data.modelo,
            nomeCliente: data.nomeCliente,
            telefoneCliente: data.telefoneCliente,
          };
        api
        .post(`/veiculo`, postVeiculo)
        .then((response)=>{
            Swal.fire({
                title: "Cadastrado com sucesso!",
                icon: "success",
                confirmButtonColor: "#ff8000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok",
              });
        })
        .catch((error)=>{
            console.log(error.response)
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
                    <label className='label-checkin' htmlFor="">Telefone:</label>
                    <label className='label-checkin' htmlFor="">Placa:</label>
                    <label className='label-checkin' htmlFor="">Modelo:</label>
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
                    <input className='input-checkin'
                        type="text"
                        name="telefoneCliente"
                        required
                        value={data.telefoneCliente || ""}
                        onChange={(e) =>
                        postteFieldHandler("telefoneCliente", e.target.value)
                    }/>
                    <input className='input-checkin'
                        type="text"
                        name="paca"
                        required
                        value={data.placa || ""}
                        onChange={(e) =>
                        postteFieldHandler("placa", e.target.value)
                    }/>
                    <input className='input-checkin'
                        type="text"
                        name="modelo"
                        required
                        value={data.modelo || ""}
                        onChange={(e) =>
                        postteFieldHandler("modelo", e.target.value)
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