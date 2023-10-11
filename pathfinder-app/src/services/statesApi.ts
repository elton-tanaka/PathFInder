import axios from "axios";

const statesApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export default statesApi;
