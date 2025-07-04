import { Link, useLocation } from "react-router-dom";
import { toAbsoluteUrl } from "../../utils/Assets";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export const SidebarMenu = () => {
  const location = useLocation();

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
      icon: "grid",
      children: [
        {
          id: 1,
          title: "Empleados",
          path: "/employees",
          icon: "people",
        },
      ],
    },
    {
      id: 3,
      title: "Flota",
      icon: "truck",
      children: [
        {
          id: 1,
          title: "Vehiculos",
          path: "/vehicles",
          icon: "car-front",
        },
        {
          id: 2,
          title: "Conductores",
          path: "/drivers",
          icon: "person",
        },
      ],
    },
    {
      id: 4,
      title: "SST",
      icon: "shield-lock",
      children: [
        {
          id: 1,
          title: "Botiquin",
          path: "/kits",
          icon: "box2-heart",
        },
        {
          id: 2,
          title: "Cajas Fuertes",
          path: "/safe",
          icon: "lock",
        },
      ],
    },
    {
      id: 5,
      title: "Usuarios",
      path: "/users",
      icon: "people",
    },
    {
      id: 6,
      title: "Reportes",
      icon: "file-earmark-arrow-down",
    },
    {
      id: 7,
      title: "Cashless",
      path: "/Cashless",
      icon: "telephone",
    },
  ];

  return (
    <div>
      <Sidebar backgroundColor="#212529" style={{ height: "100vh" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "15vh" }}
        >
          <img
            style={{ height: "100px", width: "200px" }}
            src={toAbsoluteUrl("/media/logo.png")}
          />
        </div>
        <Menu
          style={{ height: "70vh" }}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: "white",
                  backgroundColor: active
                    ? "rgba(255, 255, 255, 0.1)"
                    : undefined,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  borderRadius: "20px",
                  marginInline: "5px",
                  marginBottom: "5px",
                };
            },
          }}
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isSubMenuActive = item.children?.some(
              (child) => location.pathname === child.path
            );

            if (item.children) {
              return (
                <SubMenu
                  key={item.id}
                  label={item.title}
                  icon={<i className={`bi bi-${item.icon}`}></i>}
                  className="text-white"
                  defaultOpen={isSubMenuActive}
                >
                  {item.children.map((child) => (
                    <div className="darky" key={child.id}>
                      <div
                        className={`${
                          location.pathname === child.path
                            ? ""
                            : "menu-hover-custom"
                        }`}
                      >
                        <MenuItem
                          icon={<i className={`bi bi-${child.icon}`}></i>}
                          style={{
                            color: "white",
                            backgroundColor:
                              location.pathname === child.path
                                ? "rgba(255, 255, 255, 0.1)"
                                : "transparent",
                            borderRadius:
                              location.pathname === child.path
                                ? "20px"
                                : undefined,
                            marginInline: "5px",
                          }}
                          component={
                            <Link
                              className="text-decoration-none text-white"
                              to={child.path}
                            >
                              {child.title}
                            </Link>
                          }
                        >
                          {child.title}
                        </MenuItem>
                      </div>
                    </div>
                  ))}
                </SubMenu>
              );
            }
            return (
              <div
                className={`${isActive ? "" : "menu-hover-custom"}`}
                key={item.id}
              >
                <MenuItem
                  icon={<i className={`bi bi-${item.icon}`}></i>}
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  }}
                  component={
                    <Link
                      className="text-decoration-none text-white"
                      to={item.path || "#"}
                    >
                      {item.title}
                    </Link>
                  }
                >
                  {item.title}
                </MenuItem>
              </div>
            );
          })}
        </Menu>
        <div
          className="d-flex align-items-end justify-content-center pb-2"
          style={{ height: "15vh" }}
        >
          <button className="btn btn-outline-secondary text-white btn-hover-danger">
            <i className="bi bi-box-arrow-right pe-2"></i>
            Cerrar Sesión
          </button>
        </div>
      </Sidebar>
    </div>
  );
};
