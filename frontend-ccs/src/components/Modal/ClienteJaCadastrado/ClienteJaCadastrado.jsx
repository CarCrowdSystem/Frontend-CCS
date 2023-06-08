import React from 'react';
import '../DadosClienteCheckin/DadosClienteCheckin.css'

// import { Container } from './styles';

function ClienteJaCadastrado() {
  return (
    <>
        <div className='div-pai-checkin-cliente'>
            <div className='div-title-dados-cliente'>
                <h1 className='title-dados-cliente'>Dados do cliente</h1>
            </div>
            <div className='form-dados-cliente-checkin'>
                <div className='div-label-checkin'>
                    <label className='label-checkin' htmlFor="">Placa:</label>
                </div>
                <div className='div-inputs-checkin'>
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

export default ClienteJaCadastrado;