import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:5182/v1",
});
