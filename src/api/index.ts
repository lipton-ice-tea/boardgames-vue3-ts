import axios from 'axios';
import { AxiosResponse } from 'axios';
import * as types from '@/types/Api';

const api = axios.create({
    baseURL: 'https://api.tesera.ru/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
    },
});

export default api;

export const getGameList = (params: types.GetRequest):Promise<AxiosResponse> => api.get('/games', { params });
export const getGameItem = (path: string):Promise<AxiosResponse> => api.get(`/games/${path}`);