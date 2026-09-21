import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/notes",
    timeout: 2000,
})

export default axiosInstance;