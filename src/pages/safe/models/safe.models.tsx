export interface SafeModel {
    placa_vehiculo: string;
    puerta_estado: string;
    puerta_facilidad: string;
    clave_precisa: string;
    clave_autorizada: string;
    perilla_funciona: string; 
    numeros_visibles: string;
    caja_anclada: string;
    bservaciones: string;
}



export interface SafeUpdateSafeModel {
    id_inspeccion_safe: number;
    placa_vehiculo: string;
    puerta_estado: string;
    puerta_facilidad: string;
    clave_precisa: string;
    clave_autorizada: string;
    perilla_funciona: string; 
    numeros_visibles: string;
    caja_anclada: string;
    bservaciones: string;
}
