import React from 'react';
import './BotaoContratar.css';
// import { Container } from './styles';

function BotaoContratar(props) {
  return (
    <>
    <div className='espacoBotao'>
        <button className='btnContratar'>{props.children}</button>
    </div>
    </>
  );
}

export default BotaoContratar;