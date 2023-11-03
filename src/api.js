import axios from "axios"; // importando a biblioteca "axios"

// criando constante que possui uma instância do Axios, com uma configuração de URL base
const api = axios.create({
    // URL base para realizar as requisições
    // "Funcional" backENd ccs
<<<<<<< HEAD
    // baseURL: "http://localhost:8080/ccs-dev" 
=======
//     baseURL: "http://localhost:8080/ccs-dev"
>>>>>>> 4c90920031b37e314c77585157158d4e12310e74
    baseURL: "https://ccs-grupo7.ddnsking.com/ccs-dev"


    //Teste MockAPI
    //baseURL: "https://642f51e6c26d69edc87a880d.mockapi.io" 
})

export default api; // exportando a instância pré-configurada do Axios para ser utilizada em outros módulos
