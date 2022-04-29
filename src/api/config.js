import axios from "axios";

const URL = process.env.REACT_APP_POKEAPI  ;
console.log(process.env.REACT_APP_POKEAPI);
const axiosInstance = axios.create({
    baseURL:URL
});

export default axiosInstance;