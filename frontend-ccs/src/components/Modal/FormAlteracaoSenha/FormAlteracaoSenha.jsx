import React from 'react';
import './FormAlteracaoSenha.css'

// import { Container } from './styles';

function FormAlteracaoSenha() {
  return (
    <>
        <div className='div-pai-alteracao-senha'>
            <div className='div-title-alteracao-senha'>
                <h1 className='title-alteracao-senha'>Alteração de senha</h1>
            </div>
            <div className='form-dados-alteracao-senha'>
                <div className='div-label-alteracao-senha'>
                    <label className='label-alteracao-senha' htmlFor="">E-mail:</label>
                    <label className='label-alteracao-senha' htmlFor="">Nova senha:</label>
                    <label className='label-alteracao-senha' htmlFor="">Confirmar senha:</label>
                </div>
                <div className='div-inputs-alteracao-senha'>
                    <input className='input-alteracao-senha' type="text" />
                    <input className='input-alteracao-senha' type="text" />
                    <input className='input-alteracao-senha' type="text" />
                </div>
            </div>
            <div className='div-botao-alteracao-senha'>
                <button className='button-alteracao-senha'>Alterar</button>
            </div>
        </div>
    </>
  ); 
}

export default FormAlteracaoSenha;