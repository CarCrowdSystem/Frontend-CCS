import React, { useState } from 'react';
import './Vaga.css';
import Modal from '../../../../components/Modal/Modal';
import DadosClienteCheckin from '../../../../components/Modal/DadosClienteCheckin/DadosClienteCheckin';
import CadastroVagaConcluido from '../../../../components/Modal/CadastroVagaConcluido/CadastroVagaConcluido';
import ClienteJaCadastrado from '../../../../components/Modal/ClienteJaCadastrado/ClienteJaCadastrado';

function Vaga(props) {
  const [mostraModal, setMostraModal] = useState(false);

  function mostrarModal() {
    setMostraModal(true);
    console.log("mostrou");
  }

  function fecharModal() {
    setMostraModal(false);
    console.log("fechou");
  }

  return (
    <>
      {mostraModal && (
        <Modal onFecharModal={fecharModal}>
          <DadosClienteCheckin />
        </Modal>
      )}
      <div onClick={mostrarModal} className='div-vaga-pai-checkin'>
        <div className='div-vaga-filho-checkin'>
          <p>Vaga</p>
          <p className='numero-vaga-checkin'>{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Vaga;