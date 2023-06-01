import React from "react";
import "../../Cadastro.css";

// import { Container } from './styles';

const FloorData = ({ floor, parkingSpot, data, updateFieldHandler }) => {
  return (
    <>
      <div className="div-lavel-data-floor">
        <h3
          // name="quantidadeVagas"
          // value={data.quantidadeVagas || ""}
          // onChange={(e) => updateFieldHandler("quantidadeVagas", e.target.value)}
        >
          {parkingSpot}
        </h3>
        <h3
          // name="andar"
          // value={data.andar || ""}
          // onChange={(e) => updateFieldHandler("andar", e.target.value)}
        >
          {floor}
        </h3>
      </div>
    </>
  );
};

export default FloorData;
