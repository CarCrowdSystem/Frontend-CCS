import axios from "axios"; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
const api = axios.create({
    // URL base para realizar as requisições
    // "Funcional" backENd ccs
    // baseURL: "http://localhost:8080/ccs-dev" 
    baseURL: "ec2-52-70-63-183.compute-1.amazonaws.com" 


    //Teste MockAPI
    //baseURL: "https://642f51e6c26d69edc87a880d.mockapi.io" 
})

export default api; // exportando a instância pré-configurada do Axios para ser utilizada em outros módulos