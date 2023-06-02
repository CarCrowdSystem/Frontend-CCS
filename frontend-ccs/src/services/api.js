import axios from "axios";

const api = axios.create({
    baseURL: "localhost:8080/ccs-dev/"
});

api.post("funcionarios/login");

export default api;