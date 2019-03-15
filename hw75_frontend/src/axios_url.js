import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3051'
});

export default instance;