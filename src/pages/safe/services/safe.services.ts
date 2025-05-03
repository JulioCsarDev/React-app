import { api } from "../../../config/axios.instance";
import { SafeModel, SafeUpdateSafeModel } from "../models/safe.models";


export const DeleteSafe = async (id_Safe: number) => {
  console.log(id_Safe);
  const { data } = await api.delete(`/safes/delete_safe/${id_Safe}`);
  return data;
};
export const GetAllSafe = async () => {
  const { data } = await api.get("/safes/get_all_safes");
  return data;
};

export const RegisterNewSafe = async (safe: SafeModel) => {
  const { data } = await api.post("/safe/create_safe", safe);
  return data;
};
export const UploadSafe = async (id_inspeccion_safe: SafeUpdateSafeModel) => {
  const { data } = await api.post("/safe/update_safe", id_inspeccion_safe);
  return data;
};