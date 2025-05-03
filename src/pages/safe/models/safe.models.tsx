export interface SafeModel {
    placa_vehiculo: string;
    gasas_limpias?: boolean;
    esparadrapo_tela?: boolean;
    baja_lenguas?: boolean;
    guantes_latex?: boolean;
    venda_elastica_2?: boolean; 
    venda_elastica_3?: boolean; 
    venda_elastica_5?: boolean; 
    venda_algodon?: boolean;
    yodopovidona?: boolean;
    solucion_salina?: boolean;
    termometro_digital?: boolean;
    alcohol_antiseptico?: boolean;
    botella_agua?: boolean;
    bandas_adhesivas?: boolean;
    tijeras_punta_roma?: boolean;
    pito_emergencias?: boolean;
    manual_primeros_auxilios?: boolean;
    observacion: string;
}


export interface SafeUpdateSafeModel {
    id_inspeccion_safe: number;
    placa_vehiculo: string;
    gasas_limpias?: boolean;
    esparadrapo_tela?: boolean;
    baja_lenguas?: boolean;
    guantes_latex?: boolean;
    venda_elastica_2?: boolean; 
    venda_elastica_3?: boolean; 
    venda_elastica_5?: boolean; 
    venda_algodon?: boolean;
    yodopovidona?: boolean;
    solucion_salina?: boolean;
    termometro_digital?: boolean;
    alcohol_antiseptico?: boolean;
    botella_agua?: boolean;
    bandas_adhesivas?: boolean;
    tijeras_punta_roma?: boolean;
    pito_emergencias?: boolean;
    manual_primeros_auxilios?: boolean;
    observacion: string;
}
