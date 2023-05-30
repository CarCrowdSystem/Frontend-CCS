import React from 'react';
import './DadosClienteCheckin.css'
import CampoTexto from './../../../pages/estacionamento/Componentes/CampoTexto/index.js'

// import { Container } from './styles';

function DadosClienteCheckin() {
  return (
    <>
        <div className='div-pai-checkin-cliente'>
            <div className='div-title-dados-cliente'>
                <h1 className='title-dados-cliente'>Dados do cliente</h1>
            </div>
            <div className='form-dados-cliente-checkin'>
                <div className='div-label-checkin'>
                    <label className='label-checkin' htmlFor="">Nome:</label>
                    <label className='label-checkin' htmlFor="">Telefone:</label>
                    <label className='label-checkin' htmlFor="">Placa:</label>
                    <label className='label-checkin' htmlFor="">Modelo:</label>
                </div>
                <div className='div-inputs-checkin'>
                    <input className='input-checkin' type="text" />
                    <input className='input-checkin' type="text" />
                    <input className='input-checkin' type="text" />
                    <input className='input-checkin' type="text" />
                </div>
            </div>
            <div className='div-botao-cadastro-cliente-checkin'>
                <button className='button-cadastrar-checkin'>Cadastrar</button>
            </div>
        </div>
    
    </>
  );
}

export default DadosClienteCheckin;