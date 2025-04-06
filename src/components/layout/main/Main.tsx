import { Toaster } from 'sonner';
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SidebarMenu } from "../Sidebar";
import { Outlet } from "react-router";

export const Main = () => {
  return (
    <div className="d-flex flex-row" style={{ minHeight: "100vh" }}>
      <SidebarMenu />
      <div className="container-fluid d-flex flex-column justify-content-between">
        <div>
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Footer />
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};
