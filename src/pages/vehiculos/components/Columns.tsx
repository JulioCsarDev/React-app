import { VehiclesModel } from "../models/vehicles.models";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteVehicles } from "./DeleteTruck";

interface ColumnsProps {
  handleClickEdit: (vehicles: VehiclesModel) => void;
  handleClickDetail: (vehicles: VehiclesModel) => void;
}

export const columns = ({
  handleClickEdit,
  handleClickDetail,
}: ColumnsProps): ColumnDef<VehiclesModel>[] => [
  {
    accessorKey: "number",
    header: "N°",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "numero_identificacion",
    header: "Cedula",
    cell: ({ row }) => row.original.placa,
  },
  {
    accessorKey: "nombre_apellido",
    header: "Nombre y Apelldio",
    cell: ({ row }) => row.original.ubicacion,
  },
  {
    accessorKey: "cargo",
    header: "Cargo",
    cell: ({ row }) => row.original.numero_motor,
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
          {row.original.id !== undefined && (
            <DeleteVehicles id={row.original.id} />
          )}
        </div>
      );
    },
  },
];
