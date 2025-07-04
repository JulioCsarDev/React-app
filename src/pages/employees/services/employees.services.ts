import { api } from "../../../config/axios.instance";
import { RegisterEmployeesModel, UpdateEmployeesModel } from "../models/employees.models";

export const GetAllEmployees = async () => {
  const { data } = await api.get("/employees/get_all_employees");
  console.log("Datos recibidos del backend:", data);
  return data;
};

export const RegisterNewEmployee = async (employee: RegisterEmployeesModel) => {
  const { data } = await api.post("/employees/create_employee", employee);
  return data;
};

export const UploadEmployee = async (CC: UpdateEmployeesModel) => {
  const { data } = await api.put("/employees/update_employee", CC);
  return data;
};

export const UploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api.post("/employees/upload_file", formData);
  return data;
};

export const DeleteEmployees = async (CC: number) => {
  const { data } = await api.delete(`/employees/delete_employee/${CC}`);
  return data;
};