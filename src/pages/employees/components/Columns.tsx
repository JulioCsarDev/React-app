import { EmployeesModel } from "../models/employees.models";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteEmployee } from "./DeleteEmployees";

interface ColumnsProps {
  handleClickEdit: (employee: EmployeesModel) => void;
  handleClickDetail: (employee: EmployeesModel) => void;
  handleClickIndicator: (employee: EmployeesModel) => void;
}

export const columns = ({
  handleClickEdit,
  handleClickDetail,
  handleClickIndicator,
}: ColumnsProps): ColumnDef<EmployeesModel>[] => [
  {
    accessorKey: "number",
    header: "N°",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "CC",
    header: "Cedula",
    cell: ({ row }) => row.original.CC,
  },
  {
    accessorKey: "NOM",
    header: "Nombre",
    cell: ({ row }) => row.original.NOM,
  },
  {
    accessorKey: "CAR",
    header: "Cargo",
    cell: ({ row }) => row.original.CAR,
  },
  {
    accessorKey: "CENTRO",
    header: "Centro",
    cell: ({ row }) => row.original.CENTRO,
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
            className="btn btn-sm btn-outline-success"
            onClick={() => handleClickIndicator(row.original)}
          >
            <i className="bi bi-bar-chart-line"></i>
          </button>          
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => handleClickEdit(row.original)}
          >
            <i className="bi bi-pencil-square"></i>
          </button>

          {row.original.CC !== undefined && (
            <DeleteEmployee CC={row.original.CC} />
          )}
        </div>
      );
    },
  },
];
