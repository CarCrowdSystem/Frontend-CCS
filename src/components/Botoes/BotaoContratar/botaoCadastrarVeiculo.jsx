import React, { useState } from 'react';
import '../../../pages/dashboard/Componentes/Vaga/Vaga.css';
import Modal from '../../Modal/Modal';
import DadosClienteCheckin from '../../Modal/DadosClienteCheckin/DadosClienteCheckin';

function BotaoCadastrarVeiculo(props) {
  const [mostraModal, setMostraModal] = useState(false);

  const fecharModalClienteJaCadastrado = () => {
    setMostraModal(false);
  };

  const mostrarModalDadosClienteCheckin = () => {
    setMostraModal(true);
  };

  const healeClick = () => {
    fecharModalClienteJaCadastrado()
    mostrarModalDadosClienteCheckin()
  }

  return (
    <>
      {mostraModal && (
        <Modal onFecharModal={fecharModalClienteJaCadastrado}>
          <DadosClienteCheckin />
        </Modal>
      )}
      <div className='div-vaga-pai-botao-cadastrar'>
        <div className='div-botao-cadastrar-veiculo' onClick={healeClick}>
          <p>Cadastrar</p>
        </div>
      </div>
    </>
  );
}

export default BotaoCadastrarVeiculo;