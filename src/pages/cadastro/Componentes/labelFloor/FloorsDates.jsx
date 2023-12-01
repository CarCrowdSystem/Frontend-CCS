import React from "react";
import "../../Cadastro.css";
import IconeLixeira from "../../../funcionarios/DadosFuncionarios/lixeira.png";
// import { Container } from './styles';

const FloorData = ({ floor, parkingSpot, onExcluir }) => {

  switch (parkingSpot) {
    case 0:
      parkingSpot = "Térreo"
      break;
    case -1:
      parkingSpot = "Subsolo -1"
      break;
    case -2:
      parkingSpot = "Subsolo -2"
      break;
    case -3:
      parkingSpot = "Subsolo -3"
      break;
    case -4:
      parkingSpot = "Subsolo -4"
      break;
    case -5:
      parkingSpot = "Subsolo -5"
      break;
    case 1:
      parkingSpot = "Andar 1"
      break;
    case 2:
      parkingSpot = "Andar 2"
      break;
    case 3:
      parkingSpot = "Andar 3"
      break;
    case 4:
      parkingSpot = "Andar 4"
      break;
    case 5:
      parkingSpot = "Andar 5"
      break;
  }


  return (
    <>
      <div className="div-lavel-data-floor">
        <h3>
          {parkingSpot}
        </h3>

        <button className="botao-icone-exluir" onClick={() => onExcluir()}>
          <img src={IconeLixeira} alt="icone-lixeira" />
        </button>

        <h3>
          {floor}
        </h3>
      </div>
    </>
  );
};

export default FloorData;
