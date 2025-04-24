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
import { useKits } from "./hooks/useKits";
import Pagination from "../../components/paginator/Paginator";
import { useState } from "react";
import { ModalNewkit } from "./components/ModalNewKit";
import { ModalUpdateKit } from "./components/ModalUpdateKit";
import { ModalDetailKit } from "./components/ModalDetailKit";
import { KitUpdateKitModel } from "./models/kit.models";


export const KitPage = () => {
  const { data: Kits } = useKits();

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const [selectedKit, setSelectedKit] = useState<KitUpdateKitModel | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModelDetail, setIsOpenModalDetail] = useState(false);

  const handleClickEdit = (kit: KitUpdateKitModel) => {
    setSelectedKit(kit);
    setIsOpen(true);
  };
  const handleClickDetail = (kit: KitUpdateKitModel) => {
    setSelectedKit(kit);
    setIsOpenModalDetail(true);
  };

  const table = useReactTable({
    data: Kits || [],
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
        tittle="Botiquines"
        toolbar={
          <div>
            <ModalNewkit/> <ModalNewkit/>
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
      <ModalUpdateKit
        kit={selectedKit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ModalDetailKit
        kit={selectedKit}
        isOpenModalDetail={isOpenModelDetail}
        setIsOpenModalDetail={setIsOpenModalDetail}
      />
    </Container>
  );
};
