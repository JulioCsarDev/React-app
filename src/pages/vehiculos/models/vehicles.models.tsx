export interface VehiclesModel {
  id: number;
  ubicacion: string;
  placa: string;
  numero_motor: string;
  color_cabina: string;
  marca: string;
  linea: string;
  modelo: string;
  vencimiento_soat: string;
  dias_vigentes_soat: number;
  vencimiento_rtm: string;
  dias_vigentes_rtm: number;
  vencimiento_permiso: string;
  dias_vigentes_permiso: number;
  vencimiento_extintor: string;
  dias_vigentes_extintor: number;
}

export interface RegisterVehicleModel {
  ubicacion: string;
  placa: string;
  numero_motor: string;
  color_cabina: string;
  marca: string;
  linea: string;
  modelo: string;
  vencimiento_soat: string;
  dias_vigentes_soat: number;
  vencimiento_rtm: string;
  dias_vigentes_rtm: number;
  vencimiento_permiso: string;
  dias_vigentes_permiso: number;
  vencimiento_extintor: string;
  dias_vigentes_extintor: number;
}
