import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_SERVER as string,
	headers: { "Content-Type": "application/json" },
});

export { http };
