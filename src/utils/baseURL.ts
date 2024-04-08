import axios from "axios";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const baseURL = axios.create({
    baseURL: "https://localhost:5000/api", //user/login
    httpsAgent: agent
})