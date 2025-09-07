import axios from "axios";

export const api = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://jsonplaceholder.typicode.com",
})

// api.interceptors.request.use((config)=>{
    
// })

// api.interceptors.response.use((config)=>{

// })