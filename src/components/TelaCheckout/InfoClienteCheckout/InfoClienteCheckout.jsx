import React from 'react';
import './InfoClienteCheckout.css'

// import { Container } from './styles';

const InfoClienteCheckout = ({ nome, telefone, andar, vaga, valor}) =>  {
  return (
    <>
        <div className='valores-cliente-checkout'>
            <span>{nome}</span>
            <span>{telefone}</span>
            <span>{andar}</span>
            <span>{vaga}</span>
            <span>R$<span>{valor}</span></span>
        </div>
    </>
  );
}

export default InfoClienteCheckout;