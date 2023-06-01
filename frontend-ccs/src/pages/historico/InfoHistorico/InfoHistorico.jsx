import React from 'react';
import './InfoHistorico.css'

// import { Container } from './styles';

function InfoHistorico(props) {
  return (
    <>
        <div className='valores-historico-cliente'>
            <span>{props.children}</span>
            <span>Onix</span>
            <span>AAAAAA</span>
            <span>Térreo</span>
            <span>12</span>
            <span>(11) 99999-9999</span>
            <span>14/02/2023</span>
            <span>09:55</span>
            <span>10:55</span>
            <span>R$<span>30,00</span></span>
        </div>
    </>
  );
}

export default InfoHistorico;