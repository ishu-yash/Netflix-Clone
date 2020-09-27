import axios from 'axios';

const BASE_URL="https://api.themoviedb.org/3";

export const IMAGE_URL="https://image.tmdb.org/t/p/original/";

const instance = axios.create({
    baseURL:BASE_URL
});

export default instance;