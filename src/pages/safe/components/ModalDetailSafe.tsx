import { Modal } from "react-bootstrap";

import { toAbsoluteUrl } from "../../../utils";
import { SafeModel } from "../models/safe.models";


interface Props {
  safe: SafeModel | null;
  isOpenModalDetail: boolean;
  setIsOpenModalDetail: (isOpenModalDetail: boolean) => void;
}

export const ModalDetailsafe = ({
  safe,
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
        <Modal.Title>Informacion De Reporte</Modal.Title>
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
                    {safe?.placa_vehiculo &&
                      safe.placa_vehiculo
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
                    <strong className="">Placa:</strong> {""}
                    {safe?.placa_vehiculo}
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
