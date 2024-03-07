import axios from "axios";

const BASE_URL = 'http://192.168.238.67:7000/api/v1/'

const client = axios.create({ baseURL: BASE_URL })


export default client;