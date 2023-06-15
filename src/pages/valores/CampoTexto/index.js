import React, { useState } from 'react';
import './CampoTexto.css'

// import { Container } from './styles';

function CampoTexto(props) {

    const placeholderModificado = `R$ ${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

  return (
    <>
        <div className='campo-texto-valores'>
          <div  className='label-valores'>
            <label>{props.label}</label>
          </div>
          <input className='input-dados-valores' value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    </>
  )
}

export default CampoTexto;