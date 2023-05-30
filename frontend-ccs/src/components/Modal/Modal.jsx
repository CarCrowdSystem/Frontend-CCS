import React, {useState} from 'react';
import './Modal.css'

// import { Container } from './styles';

function Modal(props) {

    const [escondeDiv, setEscondeDiv] = useState(true);

    const escondeDivOnClick = () => {
        setEscondeDiv(false);
      };

  return (
    <>
        {escondeDiv && (<div className='div-pai-modal'>
            <div className='div-filho-modal'>
                <div className='div-botao-fechar-modal'>
                    <button className='botao-fechar-modal' onClick={escondeDivOnClick}>X</button>
                </div>
                <div className='conteudo-modal'>
                    {props.children}
                </div>
            </div>
        </div>)}
    
    </>
  );
}

export default Modal;