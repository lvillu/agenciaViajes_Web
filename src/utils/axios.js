import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://localhost:9005/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});