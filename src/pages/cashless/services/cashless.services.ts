import { api } from "../../../config/axios.instance";
import { cashlessModel } from "../models/CashlessModel";


export const GetAllCashLess = async () => {
  const { data } = await api.get("/cashless/get_all_cashless");
  return data;
};


export const UpdateCashless = async ( codigo_cliente: cashlessModel ) => {
  const { data } = await api.put("/cashless/update_cashless", codigo_cliente);
  return data;
};

export const UploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await api.post("/cashless/upload_file", formData);
    return data;
  } catch (error: any) {
    // Si la respuesta viene con error del backend (400, 500)
    const errorMessage =
      error?.response?.data?.error || "Error al subir el archivo.";
    throw new Error(errorMessage);
  }
};



export const DeleteCashless = async (codigo_cliente: number) => {
  const { data } = await api.delete(`/cashless/delete_cashless/${codigo_cliente}`);
  return data;
};

