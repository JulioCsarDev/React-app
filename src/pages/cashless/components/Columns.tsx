
import { ColumnDef } from "@tanstack/react-table";
import { cashlessModel } from "../models/CashlessModel";

interface ColumnsProps {
  handleClickEdit: (Cashless: cashlessModel) => void;
  handleClickDetail: (Cashless: cashlessModel) => void;
}

export const columns = ({
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
      },
  ];
