import React, { useState } from "react";
import SecondStep from "./secondStep";

function ParentComponent() {
  const [vagas, setVagas] = useState([]);

  const updateVagas = (newVagas) => {
    setVagas(newVagas);
  };

  return <SecondStep vagas={vagas} funcaoRetornoVagas={updateVagas} />;
}

export default ParentComponent;