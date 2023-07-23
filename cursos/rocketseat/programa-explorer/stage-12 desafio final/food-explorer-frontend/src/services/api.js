import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-b1an.onrender.com"
});