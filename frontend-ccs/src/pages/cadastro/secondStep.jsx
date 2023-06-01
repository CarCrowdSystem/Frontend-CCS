import React from "react";
import "./Cadastro.css";
import FloorDataComponent from "./Componentes/labelFloor/FloorsDates"
import { useState } from "react";

// import { Container } from './styles';


const SecondStep = ({vagas, updateFieldHandler, funcaoRetornoVagas}) =>{

  const [listaVagas, setListaVagas] = useState(vagas);
  const [qtdVagas, setQtdVagas] = useState(0);
  const [andarVaga, setAndarVaga] = useState(0);

  function adicionarVaga() {

    const vaga = {
      qtdVagas: qtdVagas,
      andarVaga: andarVaga
    }

    setListaVagas([...listaVagas, vaga])

    funcaoRetornoVagas(vaga);
  }

  return (
    <>
      <label>Selecione o andar: </label>
      <select 
        name="andar" 
        className="select-field"
        value={andarVaga || ""}
        onChange={(e) => setAndarVaga(e.target.value)}>
        <option value="0">SubSolo -5</option>
        <option value="1">SubSolo -4</option>
        <option value="2">SubSolo -3</option>
        <option value="3">SubSolo -2</option>
        <option value="4">SubSolo -1</option>
        <option value="5">Terreo</option>
        <option value="6">1 Andar</option>
        <option value="7">2 Andar</option>
        <option value="8">3 Andar</option>
        <option value="9">4 Andar</option>
        <option value="10">5 Andar</option>
      </select>

      <label>Quantidade de vagas</label>
      <input
        id="quantidade-vagas"
        className="campo-texto"
        type="text"
        name="quanntidadVagas"
        placeholder="Digite a quantidade de vagas que há no andar"
        required
        value={qtdVagas || ""}
        onChange={(e) => setQtdVagas(e.target.value)}
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