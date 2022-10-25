import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export const fetchV1Dogs = () => axios.get(`${URL}/v1/dogs`);
export const fetchV2Dogs = () => axios.get(`${URL}/v2/dogs`);
export const fetchV1Cats = () => axios.get(`${URL}/v1/cats`);
export const fetchV2Cats = () => axios.get(`${URL}/v2/cats`);