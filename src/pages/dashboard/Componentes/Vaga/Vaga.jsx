import React, { useState } from 'react';
import './Vaga.css';
import Modal from '../../../../components/Modal/Modal';
import DadosClienteCheckin from '../../../../components/Modal/DadosClienteCheckin/DadosClienteCheckin';
import ClienteJaCadastrado from '../../../../components/Modal/ClienteJaCadastrado/ClienteJaCadastrado';

const Vaga = ({numero, status, andar, andarSelecionado, idVaga, fetchData}) => {
  const [mostraModal, setMostraModal] = useState(false);
  const [mostraModalCadastro, setMostraModalCadastro] = useState(false);

  function mostrarModal() {
    setMostraModal(true);
    console.log("mostrou");
  }

  function fecharModal() {
    setMostraModal(false);
    console.log("fechou");
  }

  const handleFecharModalCadastro = () => {
    setMostraModal(true);
    setMostraModalCadastro(false);
  }

  const handleMostrarModalCadastro = () => {
    setMostraModal(false);
    setMostraModalCadastro(true);
  }

  return (
    <>
      {mostraModal && (
              <Modal onFecharModal={fecharModal}>
                <ClienteJaCadastrado 
                  func={handleMostrarModalCadastro} 
                  idVaga={idVaga}
                  fetchData={fetchData}
                  fecharModal={fecharModal}
                />
              </Modal>
            )}

            {mostraModalCadastro && (
              <Modal onFecharModal={handleFecharModalCadastro}>
                <DadosClienteCheckin fetchData={fetchData}/>
              </Modal>
            )}

      {mostraModalCadastro && (
        <Modal onFecharModal={handleFecharModalCadastro}>
          <DadosClienteCheckin fetchData={fetchData}/>
        </Modal>
      )}
      <div className={andar === andarSelecionado ? "div-vagas-selecionadas" : "div-vagas-nao-selecionada"}>
        <div
          onClick={status == "Saida" ? mostrarModal : undefined}
          className={
            status === "Saida"
              ? "div-vaga-pai-checkin"
              : "div-vaga-pai-checkin-indisponivel"
          }
        >
          <div className="div-vaga-filho-checkin">
            <p className={idVaga}>Vaga</p>
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