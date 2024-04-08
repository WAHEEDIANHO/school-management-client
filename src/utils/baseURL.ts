import axios from "axios";

export const baseURL = axios.create({
    baseURL: "https://oluyole.thebanker.app:8042/mobile/api/"
})