import '../ClienteJaCadastrado/ClienteJaCadastrado.css';
import api from '../../../api';
import Swal from "sweetalert2";
import { useState } from 'react';

var placa = ''

function ClienteJaCadastrado({ idVaga, func, fetchData, fecharModal }) {

  const [errorMessages, setErrorMessages] = useState({
    placaError: "",
  });

  const validatePlaca = () => {
    const errors = {};
    if(!placa || placa.length < 6 || !/\d/.test(placa) || !/[a-zA-Z]/.test(placa)) {
      errors.placaError = "Placa inválida";
    }
    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  }

  function realizaCheckin() {
    console.log(placa)
    console.log("Valor retornado de validarCampos:", validatePlaca());

    Swal.fire({
      title: "Realizando checkin",
      timerProgressBar: true,
      customClass: {
        container: 'custom-swal-container',
      },
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        const swalContainer = document.querySelector('.custom-swal-container');
        if (swalContainer) {
          swalContainer.style.zIndex = '10000';
        }
      },
    });
    if (validatePlaca()) {
    api
      .post(`/historicos/checkin-placa?placa=${placa}&idVaga=${idVaga}`)
      .then((response) => {
        fetchData();
        Swal.close()
        Swal.fire({
          title: "Check-in feito com sucesso!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        })
        fecharModal();
      })
      .catch((error) => {
        console.log(error.response.data.message)
        Swal.close()
        Swal.fire({
          title: "Erro ao fazer check-in!",
          text: (error.response.data.message) ? error.response.data.message : error.response.data,
          icon: "error",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        console.log(error)
      })
    } else {
      Swal.fire({
        title: "Erro ao fazer check-in!",
        text: "Verifique se preencheu o campo corretamente",
        icon: "error",
        timer: "2000",
        confirmButtonColor: "#ff8000",
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <>
      <div className='div-pai-checkin-cliente'>
        <div className='div-title-dados-cliente'>
          <h1 className='title-dados-cliente'>Check-in</h1>
        </div>
        <center><h3 style={{ marginTop: "3vh" }}>Para clientes já cadastrados</h3></center>
        <div className='form-dados-cliente-checkin'>
          <div className='div-label-checkin'>
            <label className='label-checkin' htmlFor=''>Placa: </label>
          </div>
          <div className='div-inputs-checkin'>
          <span className="error-message">{errorMessages.placaError}</span>
            <input className='input-checkin' type='text'
              placeholder="Apenas números e letras"
              required
              maxLength={7}
              onKeyUp={validatePlaca}
              onChange={(e) =>
                placa = e.target.value
              }
            />
          </div>
        </div>
        <div className='div-botao-cadastro-cliente-checkin'>
          <div className='div-vaga-pai-botao-cadastrar'>
            <div className='div-botao-cadastrar-veiculo' onClick={func}>
              <p className='p-cadastro-novo-cliente'>Cadastrar</p>
            </div>
          </div>
          <button className='button-salvar-checkin' onClick={realizaCheckin}>Salvar</button>
        </div>
      </div>
    </>
  );
}

export default ClienteJaCadastrado;