import { api } from "../../../config/axios.instance";
import { KitModel, RegisterKitModel } from "../models/kit.models";

export const DeleteKit = async (id_kit: number) => {
  console.log(id_kit);
  const { data } = await api.delete(`/drivers/delete_driver/${id_kit}`);
  return data;
};
export const GetAllKits = async () => {
  const { data } = await api.get("/kits/get_all_kits");
  return data;
};

export const RegisterNewKit = async (driver: RegisterKitModel) => {
  const { data } = await api.post("/drivers/create_driver", driver);
  return data;
};
export const UploadKit = async (id_kit: KitModel) => {
  const { data } = await api.post("/kit/update_kit", id_kit);
  return data;
};