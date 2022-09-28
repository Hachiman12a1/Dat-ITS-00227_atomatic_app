import axios from "axios";

const service = axios.create({
  baseURL: "https://reqres.in",
});

export default service;
