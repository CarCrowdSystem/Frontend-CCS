import React from 'react';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';
import './Funcionarios.css'
import Lupa from './lupa-pesquisar-func.png'
import SetaCima from './arrow_up.png'
import DadosFuncionarios from './DadosFuncionarios/DadosFuncionarios';
import NavSideBar from '../../components/NavSideBar/index'

// import { Container } from './styles';

function Funcionarios() {
  return (
    <>
        <NavSideBar/>
        <div className='container-funcionarios-pai'>
            <div className='espaco-icone'>
                <BotaoCheckout/>
            </div>
            <div className='container-funcionarios-filho'>
                <div className='container-adicionar-funcionarios'>
                    <div className='div-title-adicionar-funcionarios'>
                        <h1 className='titulo-adicionar-funcionarios'>
                          Adicionar Funcionário
                        </h1>
                    </div>
                    <div className='div-formulario-adicionar-funcionario'>
                        <div className='form-adicionar-funcionarios'>
                            <label className='label-info-add-func' htmlFor="">Nome:</label>
                            <input className='input-nome-func-add-func' type="text" />
                            <select className='combobox-cargo-add-func' name="" id="">
                              <option value="">Funcionário</option>
                              <option value="">Gerente</option>
                            </select>
                        </div>
                        <div className='form-adicionar-funcionarios'>
                            <label className='label-info-add-func' htmlFor="">CPF:</label>
                            <input className='input-add-func' type="text" />
                            <label className='label-info-add-func' htmlFor="">E-mail:</label>
                            <input className='input-add-func' type="text" />
                        </div>
                        <div className='form-adicionar-funcionarios'>
                            <label className='label-info-add-func' htmlFor="">Senha:</label>
                            <input className='input-add-func' type="text" />
                            <label className='label-info-add-func' htmlFor="">Confirmar senha:</label>
                            <input className='input-add-func' type="text" />
                        </div>
                    </div>
                    <div className='div-botao-adicionar-funcionario'>
                            <button className='botao-adicionar-funcionario'>Adicionar</button>
                            <button className='botao-adicionar-funcionario'>Desfazer</button>
                    </div>
                    <div className='div-title-exibir-funcionarios'>
                        <h1 className='titulo-adicionar-funcionarios'>Funcionários</h1>
                    </div>
                    <div className='container-pesquisa-funcionarios'>
                        <div className='div-pesquisa-funcionarios'>
                            <div className='div-separacao-pesquisa-func'>
                                <button className='botao-ordenar-func'><img className='img-seta-cima' src={SetaCima} alt="" /> A-Z</button>
                                <div className='div-buscar-pelo-nome'>
                                  <input placeholder='Buscar pelo nome...' className='input-pesquisar-func' type="text" />
                                  <button className='botao-pesquisar-func'>
                                    <img className='img-lupa-pesquisar-func' src={Lupa} alt="" />
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-pai-card-info-funcionarios'>
                        <div className='container-card-info-funcionarios'>
                            <DadosFuncionarios />
                            <DadosFuncionarios />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Funcionarios;