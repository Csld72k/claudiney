import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-1.herokuapp.com'
});
