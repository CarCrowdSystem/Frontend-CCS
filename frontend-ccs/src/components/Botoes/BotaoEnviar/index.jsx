import React from 'react';
import './BotaoEnviar.css';

// import { Container } from './styles';

function BotaoEnviar(props) {
    return (
        <>
        <div className='espacoBotao'>
            <button className='btnEnviar'>{props.children}</button>
        </div>
        </>
      );
}

export default BotaoEnviar;