import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { Main } from "../components/layout/main/Main";
import { BasePage } from "../pages/base/BasePage";
import { UsersPage } from "../pages/users/UsersPage";
import { ConductoresPage } from "../pages/drivers/ConductoresPage";
import { VehiculosPage } from "../pages/vehiculos/VehiculosPages";
import { EmployeesPage } from "../pages/employees/EmployeesPage";
import { KitPage } from "../pages/kits/KitPage";
import { SafePage } from "../pages/safe/SafePage";

export const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<BasePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/drivers" element={<ConductoresPage />} />
        <Route path="/vehiculos" element={<VehiculosPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/kits" element={<KitPage />} />
        <Route path="/safe" element={<SafePage />} />
      </Route>
    </Routes>
  );
};