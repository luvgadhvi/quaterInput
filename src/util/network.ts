import axios from "axios";

export const Network = axios.create({
  timeout: 5000,
  baseURL: "https://61db18314593510017aff7fa.mockapi.io/DummyData",
});
