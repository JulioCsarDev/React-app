import { ColumnDef } from "@tanstack/react-table";

import { DeleteKit } from "./DeleteKit";
import { KitUpdateKitModel } from "../models/kit.models";

interface ColumnsProps {
    handleClickEdit: (kit: KitUpdateKitModel) => void;
    handleClickDetail: (kit: KitUpdateKitModel) => void;
}

export const columns = ({
    handleClickEdit,
    handleClickDetail,
}: ColumnsProps): ColumnDef<KitUpdateKitModel>[] => [
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
                    {row.original.id_insppeccion_kit !== undefined && (
                        <DeleteKit id_insppeccion_kit={row.original.id_insppeccion_kit} />
                    )}
                </div>
            );
        },
    },
];
