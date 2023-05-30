import React from 'react';
import './InfoClienteCheckout.css'

// import { Container } from './styles';

function InfoClienteCheckout() {
  return (
    <>
        <div className='valores-cliente-checkout'>
            <span>Jorge da Silva</span>
            <span>(11) 99999-9999</span>
            <span>Térreo</span>
            <span>12</span>
            <span>R$<span>30,00</span></span>
        </div>
    </>
  );
}

export default InfoClienteCheckout;