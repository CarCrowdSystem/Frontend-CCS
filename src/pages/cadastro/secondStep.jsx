import React, { useState, useEffect } from "react";
import "./Cadastro.css";
import FloorDataComponent from "./Componentes/labelFloor/FloorsDates";
import Swal from "sweetalert2";

const removeNonNumericChars = (value) => {
  return value.replace(/\D/g, '');
};

const SecondStep = ({ vagas, funcaoRetornoVagas}) => {
  const [listaVagas, setListaVagas] = useState(vagas);
  const [qtdVagas, setQtdVagas] = useState(0);
  const [andarVaga, setAndarVaga] = useState(-5);

  function adicionarVaga() {
    const quantidadeVagasInt = parseInt(qtdVagas);
    const andarVagaInt = parseInt(andarVaga);

    if (quantidadeVagasInt >= 1) {
      const andarExistente = listaVagas.some(vaga => vaga.andarVaga === andarVagaInt);

      if (!andarExistente) {
        const vaga = {
          qtdVagas: quantidadeVagasInt,
          andarVaga: andarVagaInt,
        };

        setListaVagas([...listaVagas, vaga]);

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          confirmButtonColor: "#ff8000",
          text: "O andar já foi adicionado. Escolha outro andar.",
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#ff8000",
        text: "Quantidade de vagas inválida",
        timer: 3000,
      });
    }
  }

  function handleExcluirVaga(index) {
    const novasVagas = listaVagas.filter((_, i) => i !== index);
    setListaVagas(novasVagas);
  }

  useEffect(() => {
    funcaoRetornoVagas(listaVagas);
  }, [listaVagas]);

  return (
    <>
      <label>Selecione o andar: </label>
      <select
        name="andar"
        className="select-field"
        required
        value={andarVaga || ""}
        onChange={(e) => setAndarVaga(e.target.value)}>
        <option value="-5">Subsolo -5</option>
        <option value="-4">Subsolo -4</option>
        <option value="-3">Subsolo -3</option>
        <option value="-2">Subsolo -2</option>
        <option value="-1">Subsolo -1</option>
        <option value="0">Térreo</option>
        <option value="1">Andar 1</option>
        <option value="2">Andar 2</option>
        <option value="3">Andar 3</option>
        <option value="4">Andar 4</option>
        <option value="5">Andar 5</option>
      </select>

      <label>Quantidade de vagas</label>
      <input
        id="quantidade-vagas"
        className="campo-texto"
        type="text"
        name="quantidadeVagas"
        placeholder="Digite a quantidade de vagas que há no andar"
        value={qtdVagas || ""}
        onChange={(e) => setQtdVagas(removeNonNumericChars(e.target.value.trim()))}
      />

      <button onClick={adicionarVaga} type="button" className="button-add"> Adicionar </button>

      <div className="floors-datas">
        <div className="header-floors">
          <h3>Andar</h3>
          <h3>Vagas</h3>
        </div>

        {
        listaVagas.map((vaga, i) => (
          <React.Fragment key={i}>
            <FloorDataComponent
              floor={vaga.qtdVagas}
              parkingSpot={vaga.andarVaga}
              onExcluir={() => handleExcluirVaga(i)}  // Passa a função de exclusão como propriedade
            />
          </React.Fragment>
        ))
        }

      </div>
    </>
  );
}

export default SecondStep;
