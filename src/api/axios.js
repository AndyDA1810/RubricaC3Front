import axios from "axios"
const instancia = axios.create({
    baseURL: "http://localhost:5500/api",
    withCredentials: true
})
export default instancia