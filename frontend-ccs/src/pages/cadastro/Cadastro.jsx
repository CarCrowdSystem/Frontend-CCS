import "../../components/Inputs/input.css";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import LastStep from "./lastStep";
import "./Cadastro.css"

//Hooks
import { useForm } from "../../hooks/useForm";

function Cadastro(props) {
  const formCadastro = [<FirstStep />, <SecondStep />, <LastStep />];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formCadastro);

  return (
    <>
      <section className="view-cadastro">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <img className="arrowBack" src="/imgs/icons/Vector.png" />
          </div>
          <div className="div-logo">
            <img className="logo" src="/imgs/Group 39.png" />
          </div>
          <div className="progress-bar"></div>
          <div className="campo-cadastro">
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                {currentComponent}
                <div className={!isFirstStep ? "div-buttons-cadastro" : "div-button-cadastro"}>
                {!isFirstStep ? (
                  <button
                    type="button"
                    onClick={() => changeStep(currentStep - 1)}
                  >
                    Voltar
                  </button>
                ) : (
                  <span></span>
                )}

                {!isLastStep ? (
                  <button type="submit">Avançar</button>
                ) : (
                  <button type="submit">Enviar</button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="image-cadastro">
          <img
            className="sideImageCadastro"
            src="./imgs/estacionamento_static.png"
          />
        </div>
      </section>
    </>
  );
}

export default Cadastro;
