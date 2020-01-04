import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hw66-39be9.firebaseio.com/'
});

export default instance;
