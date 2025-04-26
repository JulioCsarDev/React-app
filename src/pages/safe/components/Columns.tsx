import { ColumnDef } from "@tanstack/react-table";
import { SafeUpdateSafeModel } from "../models/safe.models";
import { DeleteSafe } from "./ModalDeleteSafe";


interface ColumnsProps {
    handleClickEdit: (safe: SafeUpdateSafeModel) => void;
    handleClickDetail: (safe:SafeUpdateSafeModel) => void;
}

export const columns = ({
    handleClickEdit,
    handleClickDetail,
}: ColumnsProps): ColumnDef<SafeUpdateSafeModel>[] => [
    {
        accessorKey: "placa_vehiculo",
        header: "Placa Vehículo",
        cell: ({ row }) => row.original.placa_vehiculo,
    },
    {
        accessorKey: "observacion",
        header: "Observación",
        cell: ({ row }) => row.original.observacion,
    },
    {
        accessorKey: "action",
        header: "Acciones",
        cell: ({ row }) => {
            return (
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleClickDetail(row.original)}
                    >
                        <i className="bi bi-eye"></i>
                    </button>
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleClickEdit(row.original)}
                    >
                        <i className="bi bi-pencil-square"></i>
                    </button>
                    {row.original.id_inspeccion_safe !== undefined && (
                        <DeleteSafe id_insppeccion_safe={row.original.id_inspeccion_safe} />
                    )}
                    
                </div>
            );
        },
    },
];
