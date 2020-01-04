import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hw65-375a0.firebaseio.com/'
});

export default instance;
