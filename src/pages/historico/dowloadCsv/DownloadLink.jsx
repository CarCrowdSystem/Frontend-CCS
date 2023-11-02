import React, { useState } from 'react';
import axios from 'axios';
import api from "../../../api.js";
import "../Historico.css";
import IconeDownloadCsv from "../icon-download-csv.png";

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

const DownloadLink = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleDownload = async () => {
    try {
    //   const response = await axios.get('http://localhost:8080/ccs-dev/historicos/download-csv?id=49', { responseType: 'blob' });
      const response = await axios.get(`https://ccs-grupo7.ddnsking.com/ccs-dev/historicos/download-csv?id=${sessionIdEstacionamento}`, { responseType: 'blob' });
      const file = new Blob([response.data], { type: 'text/csv' });
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      setTimeout(()=> handleButtonClick(), 500)
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }
  };

  const handleButtonClick = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'historico.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <button className="button-download-csv" onClick={handleDownload}>
        <img
            className="img-csv-download"
            src={IconeDownloadCsv}
            alt="downloadCSV"
        />
      </button>
    </div>
  );
};

export default DownloadLink;