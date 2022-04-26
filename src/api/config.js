import axios from "axios";

const URL = process.env.POKEAPI ;
const axiosInstance = axios.create({
    baseURL:URL
});

export default axiosInstance;