import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div className='div-pai-modal'>
      <div className='div-filho-modal'>
        <div className='div-botao-fechar-modal'>
          <button className='botao-fechar-modal' onClick={props.onFecharModal}>X</button>
        </div>
        <div className='conteudo-modal'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;