import React, { useState } from 'react';
import Botao from './icone_carro_checkout.png';
import Exclamação from './icon_exclamacao_checkout.png';
import './BotaoCheckout.css';
import TelaCheckout from '../../TelaCheckout/TelaCheckout';

function BotaoCheckout() {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
    console.log("toggleDiv")
  };

  return (
    <>
      {showDiv ? <TelaCheckout onClose={toggleDiv} /> : null}
      <div className='icon-checkout'>
        <img className='NovoCeckout' src={Exclamação} alt='NovoCeckout'/>
        <button onClick={toggleDiv} className='botao-checkout'>
          <img src={Botao} alt='Checkout' />
        </button>
      </div>
    </>
  );
}

export default BotaoCheckout;