import { Link } from "react-router";
import { toAbsoluteUrl } from "../../utils/Assets";
import { Children } from "react";

export const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Inicio",
      path: "/",
      icon: "house",
    },
    {
      id: 2,
      title: "Distribucion",
      Clildren: [
        { id: 1, title: "Empleados", path: "/employees", icon: "people" },
      ],
    },
    {
      id: 3,
      title: "Flota",
      Children: [
        { id: 1, title: "Vehiculos", path: "/vehicles", icon: "car-front" },
        { id: 2, title: "Conductores", path: "/drivers", icon: "person" },
      ],
    },
    {
      id: 3,
      title: "SST",
      Children: [
        { id: 1, title: "Botiquin", path: "/kit", icon: "" },
        { id: 2, title: "Cajas Fuertes", path: "/safe", icon: "" },
      ],
    },
    {
      id: 2,
      title: "Usuarios",
      path: "users",
      icon: "people",
    },
    {
      id: 4,
      title: "Reportes",
      icon: "file-earmark-arrow-down",
    },
  ];

  return (
    <div
      className="d-flex justify-content-between flex-column darky"
      style={{ width: "300px" }}
    >
      <div style={{ height: "100%", position: "fixed" }}>
        <div className="d-flex px-3 pt-3 text-white" style={{ height: "14%" }}>
          <img
            style={{ height: "100px", width: "200px" }}
            src={toAbsoluteUrl("/media/logo.png")}
          />
        </div>
        <div className="d-flex flex-column pt-4" style={{ height: "80%" }}>
          {menuItems.map((item) => (
            <>
              {item.Children ? (
                <div key={item.id} className="dropdown">
                  <button
                    className="btn btn-outline-secondary text-white dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className={`bi bi-${item.icon} pe-2`}></i>
                    {item.title}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {item.Children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.path}
                          className="dropdown-item text-white"
                        >
                          <ul
                            className="collapse show nav flex-column ms-1"
                            id="submenu1"
                            data-bs-parent="#menu"
                          >
                            <li className="w-100">
                              <a href="#" className="nav-link px-0">
                                {" "}
                                <span className="d-none d-sm-inline">
                                  {child.title}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="nav-link px-0">
                                {" "}
                                <span className="d-none d-sm-inline">
                                  {child.title}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="btn btn-outline-secondary text-white mb-2"
                >
                  <i className={`bi bi-${item.icon} pe-2`}></i>
                  {item.title}
                </Link>
              ) : (
                <button
                  key={item.id}
                  className="btn btn-outline-secondary text-white mb-2"
                >
                  <i className={`bi bi-${item.icon} pe-2`}></i>
                  {item.title}
                </button>
              )}
            </>
          ))}
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "6%" }}
        >
          <button className="btn btn-outline-secondary text-white btn-hover-danger">
            <i className="bi bi-box-arrow-right pe-2"></i>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
