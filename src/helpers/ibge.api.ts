import axios from "axios";

const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios",
  timeout: 10000,
});

export default ibgeApi;
