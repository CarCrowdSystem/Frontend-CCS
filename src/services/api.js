import axios from "axios";

const api = axios.create({
    // baseURL: "localhost:8080/ccs-dev/"
    baseURL: "https://ccs-1686432983512.azurewebsites.net/ccs-dev/"
});

api.post("funcionarios/login");

export default api;