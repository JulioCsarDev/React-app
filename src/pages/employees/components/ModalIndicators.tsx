import { Modal } from "react-bootstrap";
import { EmployeesModel } from "../models/employees.models";
import { toAbsoluteUrl } from "../../../utils";

interface Props {
  employee: EmployeesModel | null;
  isOpenModalIndicator: boolean;
  setIsOpenModalIndicator: (isOpenModalIn: boolean) => void;
}


export const ModalIndicators = ({
  employee,
  isOpenModalIndicator,
  setIsOpenModalIndicator,
}: Props) => {
  return (
    <Modal
      size="lg"
      show={isOpenModalIndicator}
      onHide={() => setIsOpenModalIndicator(false)}
    >
      <Modal.Header closeButton>
      <Modal.Title>Indicadores del empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="card rounded">
        <div className="card-body">
        <div className="row mb-4">
          <div className="col d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <img
            src={toAbsoluteUrl("/media/user_blank.png")}
            style={{ width: "64px", height: "64px" }}
            alt="Employee"
            />
            <h5 className="mb-0">
            {employee?.NOM &&
              employee.NOM.toLowerCase().replace(/\b\w/g, (char) =>
              char.toUpperCase()
              )}
            </h5>
          </div>
          <img
            src={toAbsoluteUrl("/media/logo.png")}
            style={{ width: "130px", height: "70px" }}
            alt="Logo"
          />
          </div>
        </div>
        <hr className="m-2" />
        <div className="row g-4">
          <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-credit-card me-2 fs-4"></i>
            <strong className="me-2">CASHLESS:</strong>
            {employee?.CASH}
            </li>
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-exclamation-triangle me-2 fs-4"></i>
            <strong className="me-2">QUEJAS:</strong>
            {employee?.SAC}
            </li>
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-check2-square me-2 fs-4"></i>
            <strong className="me-2">CHECK LIST:</strong>
            {employee?.CHECK}
            </li>
          </ul>
          </div>
          <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-soundwave me-2 fs-4"></i>
            <strong className="me-2">MODULACION:</strong>
            {employee?.MOD}
            </li>
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-bullseye me-2 fs-4"></i>
            <strong className="me-2">ENTREGAS EN RANGO:</strong>
            {employee?.ER}
            </li>
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-sign-stop me-2 fs-4"></i>
            <strong className="me-2">PARADAS NO PLANEADAS:</strong>{""}
            {employee?.PARADAS}
            </li>
            <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-graph-up-arrow me-2 fs-4"></i>
            <strong className="me-2">PERFORMANCE:</strong>
            {employee?.PERFORMANCE}
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
      <button
        className="btn btn-outline-secondary"
        onClick={() => setIsOpenModalIndicator(false)}
      >
        Cancelar
      </button>
      </Modal.Footer>
    </Modal>
  );
};
