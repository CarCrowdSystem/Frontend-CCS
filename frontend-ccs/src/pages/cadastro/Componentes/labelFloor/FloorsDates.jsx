import React from "react";
import "../../Cadastro.css";

// import { Container } from './styles';

const FloorData = ({ floor, parkingSpot, nameFloor}) => {
  return (
    <>
      <div className="div-lavel-data-floor">
        <h3>
          {parkingSpot}
        </h3>
        <h3>
          {floor}
        </h3>
      </div>
    </>
  );
};

export default FloorData;
