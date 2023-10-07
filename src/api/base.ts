import axios from 'axios';

const base = axios.create({
  baseURL: 'https://movies-api.nomadcoders.workers.dev',
  timeout: 10000,
});

export default base;
