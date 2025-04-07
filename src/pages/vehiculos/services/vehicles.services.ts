import { api } from "../../../config/axios.instance";
import { RegisterVehicleModel } from "../models/vehicles.models";

export const RegisterNewVehicles = async (vehicle: RegisterVehicleModel) => {
  const { data } = await api.post("/drivers/create_driver", vehicle);
  return data;
};

export const DeleteVehicles = async (id: number) => {
  const { data } = await api.delete(`/vehicles/delete_vehicle/${id}`);
  return data;
};
