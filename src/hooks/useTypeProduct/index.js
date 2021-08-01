import { useQuery, useMutation } from "react-query";
import axios from "axios";
import configs from "../../config";

const addTypeProduct = async (params) => {
  const { data } = await axios.get(`${configs.api}/categories`, {
    params,
  });
  return data;
};
const useTypeProduct = () => {
  return useMutation(addTypeProduct);
};
export { useTypeProduct };
