import React, { useState } from 'react';
import '../ClienteJaCadastrado/ClienteJaCadastrado.css';
import BotaoCadastrarVeiculo from '../../Botoes/BotaoContratar/botaoCadastrarVeiculo';
import DadosClienteCheckin from '../DadosClienteCheckin/DadosClienteCheckin';
import api from '../../../api';

const formTemplate = {
  placa: "",
  idVaga: "",
};

function ClienteJaCadastrado() {
  const [data, setData] = useState(formTemplate);
  const [modalAberto, setModalAberto] = useState(false);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const abrirModalCadastrarCliente = () => {
    setModalAberto(true);
  };

  const fecharModalCadastrarCliente = () => {
    setModalAberto(false);
  };

  function realizaCheckin(){
    api
    .post(`/historicos/checkin-placa?placa=${formTemplate.placa}&idVaga=${70}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <div className='div-pai-checkin-cliente'>
        <div className='div-title-dados-cliente'>
          <h1 className='title-dados-cliente'>Checkin</h1>
        </div>
        <div className='form-dados-cliente-checkin'>
          <div className='div-label-checkin'>
            <label className='label-checkin' htmlFor=''>Placa:</label>
          </div>
          <div className='div-inputs-checkin'>
            <input className='input-checkin' type='text' 
              onChange={(e) =>
                updateFieldHandler("placa", e.target.value)
              }
            />
          </div>
        </div>
        <div className='div-botao-cadastro-cliente-checkin'>
          <BotaoCadastrarVeiculo onClick={abrirModalCadastrarCliente} />
          <button className='button-salvar-checkin' onClick={realizaCheckin}>Salvar</button>
        </div>
      </div>

      {modalAberto ? (
        <DadosClienteCheckin onClose={fecharModalCadastrarCliente} />
      ) : null}
    </>
  );
}

export default ClienteJaCadastrado;