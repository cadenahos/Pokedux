import axios from "axios";

const URL = process.env.REACT_APP_POKEAPI || 'https://pokeapi.co/api/v2/' ;
console.log(process.env.REACT_APP_POKEAPI);
const axiosInstance = axios.create({
    baseURL:URL
});

export default axiosInstance;