import * as Yup from "yup";
import Swal from "sweetalert2";
import { useState } from "react";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import { useRegisterVehicle } from "../hooks/useRegisterVehicle";

export const ModalNewVehicle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  const { mutate: registerMutate } = useRegisterVehicle();

  const VehiclesSchema = Yup.object().shape({
    ubicacion: Yup.number().required("Es requerida!"),
    placa: Yup.string().required("Es requerido"),
    numero_motor: Yup.string().required("Es requerido"),
    color_cabina: Yup.string().required("Es requerido"),
    marca: Yup.string().required("Es requerido"),
    linea: Yup.string().required("Es requerido"),
    modelo: Yup.string().required("Es requerido"),
    vencimiento_soat: Yup.string().required("Es requerido"),
    dias_vigentes_soat: Yup.number().required("Es requerido"),
    vencimiento_rtm: Yup.string().required("Es requerido"),
    dias_vigentes_rtm: Yup.number().required("Es requerido"),
    vencimiento_permiso: Yup.string().required("Es requerido"),
    dias_vigentes_permiso: Yup.number().required("Es requerido"),
    vencimiento_extintor: Yup.string().required("Es requerido"),
    dias_vigentes_extintor: Yup.number().required("Es requerido"),
  });

  const registerFormik = useFormik({
    initialValues: {
      ubicacion: "",
      placa: "",
      numero_motor: "",
      color_cabina: "",
      marca: "",
      linea: "",
      modelo: "",
      vencimiento_soat: "",
      dias_vigentes_soat: undefined,
      vencimiento_rtm: "",
      dias_vigentes_rtm: undefined,
      vencimiento_permiso: "",
      dias_vigentes_permiso: undefined,
      vencimiento_extintor: "",
      dias_vigentes_extintor: undefined,
    },
    validationSchema: VehiclesSchema,
    onSubmit: async (values) => {
      Swal.fire({
        title: "Registrar Vehiculo",
        text: "Se guardaran los datos ingresados.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, Guardar",
        cancelButtonText: "Cancelar",
        customClass: {
          popup: "max-w-md p-4 bg-white rounded-lg shadow-xl",
          title: "text-xl font-bold text-gray-800",
          confirmButton: "btn btn-primary text-sm",
          cancelButton: "btn btn-secondary text-sm",
        },
        didOpen: () => {
          document.body.classList.remove("swal2-shown", "swal2-height-auto");
        },
      }).then((result) => {
        if (result.isConfirmed) {
          registerMutate(values, {
            onSuccess: () => {
              registerFormik.resetForm();
              setIsOpen(false);
            },
          });
        }
      });
    },
  });

  return (
    <>
      <button className="btn btn-outline-primary btn-sm" onClick={openModal}>
        <i className="bi bi-person-fill-add pe-2 fs-5"></i>
        Agregar Vehiculo
      </button>
      <Modal size="lg" show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Vehiculo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="col">
                <label className="form-label mb-2">
                  Ubicacion
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="ubicacion"
                  className={`form-control ${
                    registerFormik.errors.ubicacion &&
                    registerFormik.touched.ubicacion
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="ubicacion"
                  type="text"
                  value={registerFormik.values.ubicacion}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.ubicacion &&
                  registerFormik.touched.ubicacion && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.ubicacion}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Placa
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="placa"
                  className={`form-control ${
                    registerFormik.errors.placa && registerFormik.touched.placa
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Nombre"
                  type="text"
                  value={registerFormik.values.placa}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.placa &&
                  registerFormik.touched.placa && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.placa}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Numero de Motor
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="numero_motor"
                  className={`form-control ${
                    registerFormik.errors.numero_motor &&
                    registerFormik.touched.numero_motor
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="numero_motor"
                  type="text"
                  value={registerFormik.values.numero_motor}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.numero_motor &&
                  registerFormik.touched.numero_motor && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.numero_motor}
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label mb-2">
                  Color de Cabina
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="color_cabina"
                  className={`form-control ${
                    registerFormik.errors.color_cabina &&
                    registerFormik.touched.color_cabina
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder=""
                  type="date"
                  value={registerFormik.values.color_cabina}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.color_cabina &&
                  registerFormik.touched.color_cabina && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.color_cabina}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Marca
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="marca"
                  className={`form-control ${
                    registerFormik.errors.marca && registerFormik.touched.marca
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Dias"
                  type="text"
                  value={registerFormik.values.marca}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.marca &&
                  registerFormik.touched.marca && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.marca}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Linea
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="linea"
                  className={`form-control ${
                    registerFormik.errors.linea && registerFormik.touched.linea
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="linea"
                  type="text"
                  value={registerFormik.values.linea}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.linea &&
                  registerFormik.touched.linea && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.linea}
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label mb-2">
                  Modelo
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="modelo"
                  className={`form-control ${
                    registerFormik.errors.modelo &&
                    registerFormik.touched.modelo
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Acuerdo"
                  type="text"
                  value={registerFormik.values.modelo}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.modelo &&
                  registerFormik.touched.modelo && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.modelo}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Fecha Vencimiento SOAT
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="vencimiento_soat"
                  className={`form-control ${
                    registerFormik.errors.vencimiento_soat &&
                    registerFormik.touched.vencimiento_soat
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder=""
                  type="date"
                  value={registerFormik.values.vencimiento_soat}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.vencimiento_soat &&
                  registerFormik.touched.vencimiento_soat && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.vencimiento_soat}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Dias vigentes SOAT
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="dias_vigentes_soat"
                  className={`form-control ${
                    registerFormik.errors.dias_vigentes_soat &&
                    registerFormik.touched.dias_vigentes_soat
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Dias"
                  type="text"
                  value={registerFormik.values.dias_vigentes_soat}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.dias_vigentes_soat &&
                  registerFormik.touched.dias_vigentes_soat && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.dias_vigentes_soat}
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label mb-2">
                  Fecha vencimiento RTM
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="vencimiento_rtm"
                  className={`form-control ${
                    registerFormik.errors.vencimiento_rtm &&
                    registerFormik.touched.vencimiento_rtm
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Acuerdo"
                  type="text"
                  value={registerFormik.values.vencimiento_rtm}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.vencimiento_rtm &&
                  registerFormik.touched.vencimiento_rtm && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.vencimiento_rtm}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Dias vigentes RTM
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="dias_vigentes_rtm"
                  className={`form-control ${
                    registerFormik.errors.dias_vigentes_rtm &&
                    registerFormik.touched.dias_vigentes_rtm
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder=""
                  type="date"
                  value={registerFormik.values.dias_vigentes_rtm}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.dias_vigentes_rtm &&
                  registerFormik.touched.dias_vigentes_rtm && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.dias_vigentes_rtm}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Fecha vencimiento Permiso
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="vencimiento_permiso"
                  className={`form-control ${
                    registerFormik.errors.vencimiento_permiso &&
                    registerFormik.touched.vencimiento_permiso
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Dias"
                  type="text"
                  value={registerFormik.values.vencimiento_permiso}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.vencimiento_permiso &&
                  registerFormik.touched.vencimiento_permiso && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.vencimiento_permiso}
                    </div>
                  )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label mb-2">
                  Dias vigentes Permiso
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="dias_vigentes_permiso"
                  className={`form-control ${
                    registerFormik.errors.dias_vigentes_permiso &&
                    registerFormik.touched.dias_vigentes_permiso
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Acuerdo"
                  type="text"
                  value={registerFormik.values.dias_vigentes_permiso}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.dias_vigentes_permiso &&
                  registerFormik.touched.dias_vigentes_permiso && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.dias_vigentes_permiso}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Fecha Vencimiento Extintor
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="vencimiento_extintor"
                  className={`form-control ${
                    registerFormik.errors.vencimiento_extintor &&
                    registerFormik.touched.vencimiento_extintor
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder=""
                  type="date"
                  value={registerFormik.values.vencimiento_extintor}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.vencimiento_extintor &&
                  registerFormik.touched.vencimiento_extintor && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.vencimiento_extintor}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="form-label mb-2">
                  Dias vigentes Extintor
                  <span className="text-danger">*</span>
                </label>
                <input
                  name="dias_vigentes_extintor"
                  className={`form-control ${
                    registerFormik.errors.dias_vigentes_extintor &&
                    registerFormik.touched.dias_vigentes_extintor
                      ? "border-danger"
                      : ""
                  }`}
                  placeholder="Dias"
                  type="text"
                  value={registerFormik.values.dias_vigentes_extintor}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                />
                {registerFormik.errors.dias_vigentes_extintor &&
                  registerFormik.touched.dias_vigentes_extintor && (
                    <div className="text-danger text-[13px]">
                      <i className="ki-filled ki-information me-1"></i>
                      {registerFormik.errors.dias_vigentes_extintor}
                    </div>
                  )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => registerFormik.handleSubmit()}
            disabled={!registerFormik.isValid || !registerFormik.dirty}
          >
            Registrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
