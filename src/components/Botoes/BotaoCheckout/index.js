import React, { useState } from 'react';
import Botao from './icone_carro_checkout.png';
import './BotaoCheckout.css';
import TelaCheckout from '../../TelaCheckout/TelaCheckout';

const BotaoCheckout = ({isTrue}) =>  {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
    console.log("toggleDiv")
  };

  return (
    <>
      {showDiv ? <TelaCheckout onClose={toggleDiv} /> : null}
      <div className={(isTrue) ? 'icon-checkout imgIconCheckout' : 'icon-checkout'}>
        <button onClick={toggleDiv} className='botao-checkout'>
          <img src={Botao} alt='Checkout' />
        </button>
      </div>
    </>
  );
}

export default BotaoCheckout;