import axios from "axios";

const BASE_URL = 'https://swep-backend-template.onrender.com/api/v1/'

const client = axios.create({ baseURL: BASE_URL })


export default client;