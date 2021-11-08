import axios from 'axios';

export const getObservaciones = (idInteraccion) => {
    return axios.get('http://localhost:3003/observaciones?idInteraccion=1').then(res => res.data);
}

export const getObservacion = (id) => {
    return axios.get(`http://localhost:3003/observaciones/${id}`).then(res => res.data);
}

export const saveObservacion = (data) => {
    return axios.post('http://localhost:3003/observaciones', data).then(res => res.data);
}