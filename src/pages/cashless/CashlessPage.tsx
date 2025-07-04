import { Container } from "../../components/container/Container";
import Card from "../../components/layout/Card";
import { columns } from "./components/Columns";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { DataTable } from "../../components/datatable/DataTable";
import { useCashless } from "./hooks/useCashless";
import Pagination from "../../components/paginator/Paginator";
import { useState } from "react";
import { ModalUploadFile } from "../drivers/components/ModalUploadFile";
import { cashlessModel } from "./models/CashlessModel";
import { ModalUpdateCashless } from "./components/ModalUpdateCashless";
import { ModalDetailCashless } from "./components/ModalDetailCashless";


export const CASHLESSPAGE = () => {
  const { data: Cashless } = useCashless();

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const [selectedCashless, setSelectedCashless] = useState<cashlessModel | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModelDetail, setIsOpenModalDetail] = useState(false);

  const handleClickEdit = (cashless: cashlessModel) => {
    setSelectedCashless(cashless);
    setIsOpen(true);
  };
  const handleClickDetail = (cashless: cashlessModel) => {
    setSelectedCashless(cashless);
    setIsOpenModalDetail(true);
  };

  const table = useReactTable({
    data: Cashless || [],
    columns: columns({ handleClickEdit, handleClickDetail }),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
  });

  return (
    <Container>
      <Card
        tittle="cashless"
        toolbar={
          <div>
             <ModalUploadFile />
          </div>
        }
      >
        <DataTable
          table={table}
          columns={columns({ handleClickEdit, handleClickDetail })}
          footer={<Pagination table={table} />}
          nameTable="Lista de Cashless"
          filterGlobal={
            <div className="input-group w-25">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <input
                className="form-control"
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Buscar"
              />
            </div>
          }
        />
      </Card>
      <ModalUpdateCashless
        cashless={selectedCashless}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ModalDetailCashless
        cashless={selectedCashless}
        isOpenModalDetail={isOpenModelDetail}
        setIsOpenModalDetail={setIsOpenModalDetail}
      />
    </Container>
  );
};
