import React, { useState } from 'react';
import './Vaga.css';
import Modal from '../../../../components/Modal/Modal';
import DadosClienteCheckin from '../../../../components/Modal/DadosClienteCheckin/DadosClienteCheckin';
import CadastroVagaConcluido from '../../../../components/Modal/CadastroVagaConcluido/CadastroVagaConcluido';
import ClienteJaCadastrado from '../../../../components/Modal/ClienteJaCadastrado/ClienteJaCadastrado';

const Vaga = ({numero, status, andar, andarSelecionado}) => {
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
          <ClienteJaCadastrado />
        </Modal>
      )}
      <div className={andar == andarSelecionado ? "div-vagas-selecionadas" : "div-vagas-nao-selecionada"}>
        <div
          onClick={mostrarModal}
          className={
            !status === "Saida"
              ? "div-vaga-pai-checkin-indisponivel"
              : "div-vaga-pai-checkin"
          }
        >
          <div className="div-vaga-filho-checkin">
            <p>Vaga</p>
            <p
              className={
                !status === "Saida"
                  ? "numero-vaga-checkin-indisponivel"
                  : "numero-vaga-checkin"
              }
            >
              {numero}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaga;