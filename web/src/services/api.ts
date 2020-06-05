import axios from 'axios';

//Com axios dá para criar uma baseURL que é um URL que vai se repetir em todas as requisições
const api = axios.create({
    baseURL:'http://localhost:3333'
});

export default api;

