import { Modal } from "react-bootstrap";
import { cashlessModel } from "../models/CashlessModel";
import { toAbsoluteUrl } from "../../../utils";

interface Props {
  cashless: cashlessModel | null;
  isOpenModalDetail: boolean;
  setIsOpenModalDetail: (isOpenModalDetail: boolean) => void;
}

export const ModalDetailCashless = ({
  cashless,
  isOpenModalDetail,
  setIsOpenModalDetail,
}: Props) => {
  return (
    <Modal
      size="lg"
      show={isOpenModalDetail}
      onHide={() => setIsOpenModalDetail(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Informacion Del Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card rounded">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex p-2 justify-content-between mx-4">
                <div className="d-flex gap-3">
                  <img
                    src={toAbsoluteUrl("/media/user_blank.png")}
                    style={{ width: "64px", height: "64px" }}
                  />
                  <h5 className="d-flex align-items-end">
                    {cashless?.cliente_nombre &&
                      cashless.cliente_nombre
                        .toLowerCase()
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </h5>
                </div>
                <div>
                  <img
                    src={toAbsoluteUrl("/media/logo.png")}
                    style={{ width: "130px", height: "70px" }}
                  />
                </div>
              </div>
            </div>
            <hr className="m-2"></hr>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-person-vcard me-2 fs-4"></i>
                    <strong className="">Codigo del cliente:</strong> {""}
                    {cashless?.codigo_cliente !== undefined && cashless?.codigo_cliente !== null
                      ? cashless.codigo_cliente.toString()
                      : ""}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-person-workspace me-2 fs-4"></i>
                    <strong className="">Codigo de pedido:</strong> {""}
                    {cashless?.Documento_pedido !== undefined && cashless?.Documento_pedido !== null
                      ? cashless.Documento_pedido.toString()
                      : ""}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-calendar-event me-2 fs-4"></i>
                    <strong className="">Placa:</strong>{" "}
                    {cashless?.placa_vehiculo}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-calendar-event me-2 fs-4"></i>
                    <strong className="">Numero:</strong>{" "}
                    {cashless?.numero_cliente !== undefined && cashless?.numero_cliente !== null
                      ? cashless.numero_cliente.toString()
                      : ""}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-calendar-event me-2 fs-4"></i>
                    <strong className="">Novedad:</strong>{" "}
                    {cashless?.Novedad !== undefined && cashless?.Novedad !== null}
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
          onClick={() => setIsOpenModalDetail(false)}
        >
          Cancelar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
