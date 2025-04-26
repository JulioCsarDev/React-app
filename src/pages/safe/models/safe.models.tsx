export interface SafeModel {
    placa_vehiculo: string;
    puerta_estado?: boolean;
    puerta_facilidad?: boolean;
    clave_precisa?: boolean;
    clave_autorizada?: boolean;
    perilla_funciona?: boolean; 
    numeros_visibles?: boolean;
    caja_anclada?: boolean;
    observacion: string;
}



export interface SafeUpdateSafeModel {
    id_inspeccion_safe: number;
    placa_vehiculo: string;
    puerta_estado: boolean;
    puerta_facilidad: boolean;
    clave_precisa: boolean;
    clave_autorizada: boolean;
    perilla_funciona: boolean; 
    numeros_visibles: boolean;
    caja_anclada: boolean;
    observacion: string;
}
