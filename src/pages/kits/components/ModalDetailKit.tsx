import { Modal } from "react-bootstrap";

import { toAbsoluteUrl } from "../../../utils";
import { KitModel } from "../models/kit.models";


interface Props {
  kit: KitModel | null;
  isOpenModalDetail: boolean;
  setIsOpenModalDetail: (isOpenModalDetail: boolean) => void;
}

export const ModalDetailKit = ({
  kit,
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
                    {kit?.placa_vehiculo &&
                      kit.placa_vehiculo
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
                    {kit?.placa_vehiculo}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-person-workspace me-2 fs-4"></i>
                    <strong className="">Cargo:</strong> {""}
                    {kit?.gasas_limpias}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-calendar-event me-2 fs-4"></i>
                    <strong className="">Esparadrapo de tela:</strong>{" "}
                    {kit?.esparadrapo_tela}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-calendar4-week me-2 fs-4"></i>
                    <strong className="">Baja lenguas:</strong> {""}
                    {kit?.baja_lenguas}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-file-text me-2 fs-4"></i>
                    <strong className="">Guantes latex :</strong>{" "}
                    {kit?.guantes_latex}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-journal-bookmark me-2 fs-4"></i>
                    <strong className="">Venda elastica 2:</strong> {""}
                    {kit?.venda_elastica_2}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-journal-bookmark me-2 fs-4"></i>
                    <strong className="">Venda elastica 3:</strong> {""}
                    {kit?.venda_elastica_3}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4 ">
                    <i className="bi bi-journal-bookmark me-2 fs-4"></i>
                    <strong className="">Venda elastica 5:</strong> {""}
                    {kit?.venda_elastica_5}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-range me-2 fs-4"></i>
                    <strong className="">Venda de algodon:</strong>{" "}
                    {kit?.venda_algodon}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">yodopovidona:</strong> {""}
                    {kit?.yodopovidona}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Solucion salina:</strong> {""}
                    {kit?.solucion_salina}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Termometro digital:</strong> {""}
                    {kit?.termometro_digital}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Alcohol antiseptico:</strong> {""}
                    {kit?.alcohol_antiseptico}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Botella de agua:</strong> {""}
                    {kit?.botella_agua}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Bandas adhesivas:</strong> {""}
                    {kit?.bandas_adhesivas}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Tijeras punta roma:</strong> {""}
                    {kit?.tijeras_punta_roma}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Pito emergencias:</strong> {""}
                    {kit?.pito_emergencias}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Manual de primeros auxilios:</strong> {""}
                    {kit?.manual_primeros_auxilios}
                  </li>
                </ul>
              </div>
              <div className="col w-100">
                <ul className="list-group list-group-flush border-bottom">
                  <li className="list-group-item p-4">
                    <i className="bi bi-calendar-week me-2 fs-4"></i>
                    <strong className="">Observacion:</strong> {""}
                    {kit?.observacion}
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
