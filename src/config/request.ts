import axios from "axios";

const request = axios.create({baseURL:"https://6846b8e17dbda7ee7ab016c2.mockapi.io"})

request.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer token"
    return config
})

export {request}