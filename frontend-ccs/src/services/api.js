import axios from "axios";

const api = axios.create({
    baseURL: "localhost:8080/"
});

api.post("ccs-dev/funcionarios/login");

export default api;