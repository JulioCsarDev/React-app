import { api } from "../../../config/axios.instance";
import { cashlessModel } from "../models/CashlessModel";


export const GetAllCashLess = async () => {
  const { data } = await api.get("/cashless/get_all_cashless");
  console.log("Datos recibidos del backend:", data);
  return data;
};


export const UpdateCashless = async ( codigo_cliente: cashlessModel ) => {
  const { data } = await api.post("/cashless/update_cashless", codigo_cliente);
  return data;
};

export const UploadCashless = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api.post("/cashless/upload_cashless", formData);
  return data;
};

