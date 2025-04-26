import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Main } from "../components/layout/main/Main";
import { BasePage } from "../pages/base/BasePage";
import { UsersPage } from "../pages/users/UsersPage";

import { KitPage } from "../pages/kits/KitPage";
import { SafePage } from "../pages/safe/SafePage";
import { EmployeesPage } from "../pages/employees/EmployeesPage";
import { ConductoresPage } from "../pages/drivers/ConductoresPage";
import { VehiculosPage } from "../pages/vehiculos/VehiculosPages";

// Lazy-loaded pages


// Route constants
const ROUTES = {
  BASE: "/",
  USERS: "/users",
  DRIVERS: "/drivers",
  VEHICULOS: "/vehiculos",
  EMPLOYEES: "/employees",
  KITS: "/kits",
  SAFE: "/safe",
};

export const AppRoutingSetup = (): ReactElement => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Main />}>
          <Route path={ROUTES.BASE} element={<BasePage />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.DRIVERS} element={<ConductoresPage />} />
          <Route path={ROUTES.VEHICULOS} element={<VehiculosPage />} />
          <Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTES.KITS} element={<KitPage />} />
          <Route path={ROUTES.SAFE} element={<SafePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
