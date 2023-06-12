import React from 'react';

// import { Container } from './styles';

const NomeEstacionamento = ({nome}) => {
  return (
    <>
        <div className='titulo-nome-estacionamento'>
            <h2 className='title-nome-estacionamento'>{nome}</h2>
        </div>
    </>
  );
}

export default NomeEstacionamento;