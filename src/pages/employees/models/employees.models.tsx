export interface EmployeesModel {
  CC: number;
  NOM: string;
  CAR: string;
  CENTRO: string;
  CASH: string;
  SAC: string;
  CHECK: string;
  MOD: string;
  ER: string;
  PARADAS: string;
  PERFORMANCE: string;
}
export interface RegisterEmployeesModel {
  CC?: number;
  NOM: string;
  CAR: string;
  CENTRO: string;
}

export interface UpdateEmployeesModel {
  CC?: number;
  NOM: string;
  CAR: string;
  CENTRO: string;

}

