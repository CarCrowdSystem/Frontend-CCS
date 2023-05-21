import React from 'react';
import Botao from './icone_carro_checkout.png'
import './BotaoCheckout.css'

function BotaoCheckout() {
  return (
    <>
        <div className='icon-checkout'>
            <button className='botao-checkout'>
                <img src={Botao}></img>
            </button>
        </div>
    </>
  )
}

export default BotaoCheckout;