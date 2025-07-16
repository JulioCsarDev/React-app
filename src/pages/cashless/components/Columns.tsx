
import { ColumnDef } from "@tanstack/react-table";
import { cashlessModel } from "../models/CashlessModel";
import { DeleteCashless } from "../services/cashless.services";

interface ColumnsProps {
  handleClickEdit: (employee: cashlessModel) => void;
  handleClickDetail: (Cashless: cashlessModel) => void;
}

export const columns = ({
  handleClickEdit,
  handleClickDetail
}: ColumnsProps): ColumnDef<cashlessModel>[] => [
    {
      accessorKey: "number",
      header: "N°",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "CODIGO",
      header: "CODIGO",
      cell: ({ row }) => row.original.codigo_cliente,
    },
    {
      accessorKey: "CLIENTE",
      header: "NOMBRE",
      cell: ({ row }) => row.original.cliente_nombre,
    },
    {
      accessorKey: "DT",
      header: "DT",
      cell: ({ row }) => row.original.Documento_pedido,
    },
    {
      accessorKey: "PLACA",
      header: "PLACA",
      cell: ({ row }) => row.original.placa_vehiculo,
    },
    {
      accessorKey: "NUMERO",
      header: "NUMERO",
      cell: ({ row }) => row.original.numero_cliente,
    },
    {
      accessorKey: "NOVEDAD",
      header: "NOVEDAD",
      cell: ({ row }) => row.original.Novedad,
    },
    {
        accessorKey: "action",
        header: "ACCIONES",
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
        
                  {row.original.codigo_cliente !== undefined && (
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => DeleteCashless(Number(row.original.codigo_cliente))}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  )}
                </div>
              );
            },
      },
  ];
