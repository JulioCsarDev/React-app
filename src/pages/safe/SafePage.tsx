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
import Pagination from "../../components/paginator/Paginator";
import { useState } from "react";
import { ModalNewsafe as ModalNewSafe } from "./components/ModalNewSafe";
import { ModalUpdateSafe as ModalUpdateSafe } from "./components/ModalUpdateSafe";
import { ModalDetailsafe as ModalDetailSafe } from "./components/ModalDetailSafe";
import { SafeUpdateSafeModel } from "./models/safe.models";



export const SafePage = () => {
  const { data: Safe } = useSafes();

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const [selectedSafe, setSelectedSafe] = useState<SafeUpdateSafeModel | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModelDetail, setIsOpenModalDetail] = useState(false);

  const handleClickEdit = (Safe: SafeUpdateSafeModel) => {
    setSelectedSafe(Safe);
    setIsOpen(true);
  };
  const handleClickDetail = (Safe: SafeUpdateSafeModel) => {
    setSelectedSafe(Safe);
    setIsOpenModalDetail(true);
  };

  const table = useReactTable({
    data: Safe || [],
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
        tittle="Caja fuerte"
        toolbar={
          <div>
            <ModalNewSafe></ModalNewSafe>
          </div>
        }
      >
        <DataTable
          table={table}
          columns={columns({ handleClickEdit, handleClickDetail })}
          footer={<Pagination table={table} />}
          nameTable="Lista de Conductores"
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
      {selectedSafe && (
        <ModalUpdateSafe
          safe={selectedSafe}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <ModalDetailSafe
        safe={selectedSafe}
        isOpenModalDetail={isOpenModelDetail}
        setIsOpenModalDetail={setIsOpenModalDetail}
      />
    </Container>
  );
};
function useSafes(): { data: any; } {
  throw new Error("Function not implemented.");
}

