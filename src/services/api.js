import axios from 'axios';

const api = axios.create({ baseURL: 'https://conceptron-api.herokuapp.com/'});

export default api;