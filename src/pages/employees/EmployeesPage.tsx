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
import { useEmployees } from "./hooks/useEmployees";
import Pagination from "../../components/paginator/Paginator";
import { useState } from "react";
import { ModalUploadFile } from "./components/ModalUploadFile";
import { ModalNewEmployee } from "./components/ModalNewEmployee";
import {
  EmployeesModel,
  UpdateEmployeesModel,
} from "./models/employees.models";
import { ModalUpdateEmployee } from "./components/ModalUploadEmployees";
import { ModalDetailEmployee } from "./components/ModalDetailEmployee";
import { ModalIndicators } from "./components/ModalIndicators";

export const EmployeesPage = () => {
  const { data: Employees } = useEmployees();

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const [selectedEmployees, setSelectedEmployees] =
    useState<UpdateEmployeesModel | null>(null);

  const [selectedEmployeesDetail, setSelectedEmployeesDetail] =
    useState<EmployeesModel | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModelDetail, setIsOpenModalDetail] = useState(false);

  const [isOpenModelIndicator, setIsOpenModalIndicator] = useState(false);

  const handleClickEdit = (employees: UpdateEmployeesModel) => {
    setSelectedEmployees(employees);
    setIsOpen(true);
  };

  const handleClickDetail = (employee: EmployeesModel) => {
    setSelectedEmployeesDetail(employee);
    setIsOpenModalDetail(true);
  };

  const handleClickIndicator = (employee: EmployeesModel) => {
    setSelectedEmployees(employee);
    setIsOpenModalIndicator(true);
  };
  const table = useReactTable({
    data: Employees || [],
    columns: columns({ handleClickEdit, handleClickDetail,handleClickIndicator }),
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
        tittle="Empleados"
        toolbar={
          <div>
            {" "}
            <ModalNewEmployee />
            <ModalUploadFile />
          </div>
        }
      >
        <DataTable
          table={table}
          columns={columns({ handleClickEdit, handleClickDetail,handleClickIndicator })}
          footer={<Pagination table={table} />}
          nameTable="Lista de Empleados"
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
      <ModalUpdateEmployee
        employee={selectedEmployees}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ModalIndicators       
          employee={selectedEmployeesDetail}
          isOpenModalIndicator={isOpenModelIndicator}
          setIsOpenModalIndicator={setIsOpenModalIndicator}
      />
      <ModalDetailEmployee
        employee={selectedEmployeesDetail}
        isOpenModalDetail={isOpenModelDetail}
        setIsOpenModalDetail={setIsOpenModalDetail}
      />
    </Container>
  );
};
