import React from 'react';
import './InfoHistorico.css'

// import { Container } from './styles';

const InfoHistorico = ({nomeCliente, modeloCarro, placa, andar, vaga, telefone, data, hora, status, valor}) => {
  return (
    <>
        <div className='valores-historico-cliente'>
            <div className='div-historico'><span>{nomeCliente}</span></div>
            <div className='div-historico'><span>{modeloCarro}</span></div>
            <div className='div-historico'><span>{placa}</span></div>
            <div className='div-historicoP'><span>{andar}</span></div>
            <div className='div-historicoP'><span>{vaga}</span></div>
            <div className='div-historico'><span>{telefone}</span></div>
            <div className='div-historico'><span>{data}</span></div>
            <div className='div-historico'><span>{hora}</span></div>
            <div className='div-historico'><span>{status}</span></div>
            <div className='div-historico'><span>{valor}</span></div>
        </div>
    </>
  );
}

export default InfoHistorico;