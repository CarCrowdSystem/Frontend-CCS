import React from "react";
import "./Cadastro.css";
import FloorDataComponent from "./Componentes/labelFloor/FloorsDates"
import { useState } from "react";
import Swal from "sweetalert2";

// import { Container } from './styles';

const removeNonNumericChars = (value) => {
  return value.replace(/\D/g, '');
};

const SecondStep = ({vagas, funcaoRetornoVagas}) =>{

  const [listaVagas, setListaVagas] = useState(vagas);
  const [qtdVagas, setQtdVagas] = useState(0);
  const [andarVaga, setAndarVaga] = useState(-5);

  function adicionarVaga() {
    const quantidadeVagasInt = parseInt(qtdVagas);
    const andarVagaInt = parseInt(andarVaga);
  
    if (quantidadeVagasInt >= 1) {
      // Verifica se o andar já existe na lista
      const andarExistente = listaVagas.some(vaga => vaga.andarVaga === andarVagaInt);
  
      if (!andarExistente) {
        const vaga = {
          qtdVagas: quantidadeVagasInt,
          andarVaga: andarVagaInt,
        };
  
        setListaVagas([...listaVagas, vaga]);
        funcaoRetornoVagas(vaga);
      } else {
        /* alert("O andar já foi adicionado. Escolha outro andar."); */
        Swal.fire({
          icon: "error",
          title: "Oops...",
          confirmButtonColor: "#ff8000",
          text: "O andar já foi adicionado. Escolha outro andar.",
          timer: 3000,
        });
      }
    } else {
      /* alert("Quantidade de vagas inválida"); */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#ff8000",
        text: "Quantidade de vagas inválida",
        timer: 3000,
      });
    }
  }

  return (
    <>
      <label>Selecione o andar: </label>
      <select 
        name="andar" 
        className="select-field"
        required
        value={andarVaga || ""}
        onChange={(e) => setAndarVaga(e.target.value)}>
        <option value="-5">SubSolo -5</option>
        <option value="-4">SubSolo -4</option>
        <option value="-3">SubSolo -3</option>
        <option value="-2">SubSolo -2</option>
        <option value="-1">SubSolo -1</option>
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
        required
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
              <FloorDataComponent floor={vaga.qtdVagas} parkingSpot={vaga.andarVaga}/>
            </React.Fragment>
          ))
        }

      </div>
    </>
  );
}

export default SecondStep;
