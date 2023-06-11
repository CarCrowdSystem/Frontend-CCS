import React from 'react';
import './InfoHistorico.css'

// import { Container } from './styles';

const InfoHistorico = ({nomeCliente, modeloCarro, placa, andar, vaga, telefone, data, entrada, saida, valor}) => {
  return (
    <>
        <div className='valores-historico-cliente'>
            <span>{nomeCliente}</span>
            <span>{modeloCarro}</span>
            <span>{placa}</span>
            <span>{andar}</span>
            <span>{vaga}</span>
            <span>{telefone}</span>
            <span>{data}</span>
            <span>{entrada}</span>
            <span>{saida}</span>
            <span>{valor}</span>
        </div>
    </>
  );
}

export default InfoHistorico;