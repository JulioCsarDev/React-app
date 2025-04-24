import * as Yup from "yup";
import { useState } from "react";
import { useRegisterKit } from "../hooks/useRegisterKit";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

export const ModalNewkit = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);

    const { mutate: registerMutate } = useRegisterKit();

    const KitSchema = Yup.object().shape({
        placa: Yup.string().required("La placa es requerida"),
        gasas_limpias: Yup.boolean().required("Campo requerido"),
        esparadrapo_tela: Yup.boolean().required("Campo requerido"),
        baja_lenguas: Yup.boolean().required("Campo requerido"),
        guantes_latex: Yup.boolean().required("Campo requerido"),
        venda_elastica_2: Yup.boolean().required("Campo requerido"),
        venda_elastica_3: Yup.boolean().required("Campo requerido"),
        venda_elastica_5: Yup.boolean().required("Campo requerido"),
        venda_algodon: Yup.boolean().required("Campo requerido"),
        yodopovidona: Yup.boolean().required("Campo requerido"),
        solucion_salina: Yup.boolean().required("Campo requerido"),
        termometro_digital: Yup.boolean().required("Campo requerido"),
        alcohol_antiseptico: Yup.boolean().required("Campo requerido"),
        botella_agua: Yup.boolean().required("Campo requerido"),
        bandas_adhesivas: Yup.boolean().required("Campo requerido"),
        tijeras_punta_roma: Yup.boolean().required("Campo requerido"),
        pito_emergencias: Yup.boolean().required("Campo requerido"),
        manual_primeros_auxilios: Yup.boolean().required("Campo requerido"),
        observacion: Yup.string().required("Campo requerido"),
    });
    
    const registerFormik = useFormik({
        initialValues: {
            placa: "",
            gasas_limpias: false,
            esparadrapo_tela: false,
            baja_lenguas: false,
            guantes_latex: false,
            venda_elastica_2: false,
            venda_elastica_3: false,
            venda_elastica_5: false,
            venda_algodon: false,
            yodopovidona: false,
            solucion_salina: false,
            termometro_digital: false,
            alcohol_antiseptico: false,
            botella_agua: false,
            bandas_adhesivas: false,
            tijeras_punta_roma: false,
            pito_emergencias: false,
            manual_primeros_auxilios: false,
            observacion: "",
        },
        validationSchema: KitSchema,
        onSubmit: async (values) => {
              Swal.fire({
                title: "Registrar Conductor",
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
                Agregar Inspeccion de botiquines
            </button>
            <Modal size="lg" show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Inspeccion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label className="form-label mb-2">
                                    Placa
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="placa"
                                    className={`form-control ${
                                        registerFormik.errors.placa &&
                                        registerFormik.touched.placa
                                        ? "border-danger"
                                        : ""
                                    }`}
                                    placeholder="Placa"
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
                                    Gasas Limpias
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="gasas_limpias"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.gasas_limpias}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene gasas limpias
                                    </label>
                                </div>
                                {registerFormik.errors.gasas_limpias &&
                                    registerFormik.touched.gasas_limpias && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.gasas_limpias}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Esparadrapo De Tela
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="esparadrapo_tela"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.esparadrapo_tela}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene esparadrapo de tela
                                    </label>
                                </div>
                                {registerFormik.errors.esparadrapo_tela &&
                                    registerFormik.touched.esparadrapo_tela && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.esparadrapo_tela}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label className="form-label mb-2">
                                    Baja Lenguas
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="baja_lenguas"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.baja_lenguas}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene baja lenguas
                                    </label>
                                </div>
                                {registerFormik.errors.baja_lenguas &&
                                    registerFormik.touched.baja_lenguas && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.baja_lenguas}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Guantes De Latex
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="guantes_latex"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.guantes_latex}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene guantes de latex
                                    </label>
                                </div>
                                {registerFormik.errors.guantes_latex &&
                                    registerFormik.touched.guantes_latex && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.guantes_latex}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Venda Elastica #2
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="venda_elastica_2"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.venda_elastica_2}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene venda elastica #2
                                    </label>
                                </div>
                                {registerFormik.errors.venda_elastica_2 &&
                                    registerFormik.touched.venda_elastica_2 && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.venda_elastica_2}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Continuar con el resto de los campos siguiendo el mismo patrón */}
                        <div className="row mt-3">
                            <div className="col">
                                <label className="form-label mb-2">
                                    Venda Elastica #3
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="venda_elastica_3"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.venda_elastica_3}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene venda elastica #3
                                    </label>
                                </div>
                                {registerFormik.errors.venda_elastica_3 &&
                                    registerFormik.touched.venda_elastica_3 && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.venda_elastica_3}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Venda Elastica #5
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="venda_elastica_5"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.venda_elastica_5}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene venda elastica #5
                                    </label>
                                </div>
                                {registerFormik.errors.venda_elastica_5 &&
                                    registerFormik.touched.venda_elastica_5 && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.venda_elastica_5}
                                    </div>
                                )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Venda De Algodon
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        name="venda_algodon"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={registerFormik.values.venda_algodon}
                                        onChange={registerFormik.handleChange}
                                        onBlur={registerFormik.handleBlur}
                                    />
                                    <label className="form-check-label">
                                        Tiene venda de algodon
                                    </label>
                                </div>
                                {registerFormik.errors.venda_algodon &&
                                    registerFormik.touched.venda_algodon && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.venda_algodon}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Los demás campos booleanos... */}
                        <div className="row mt-3">
                            <div className="col-12">
                                <label className="form-label mb-2">
                                    Observacion
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    name="observacion"
                                    className={`form-control ${
                                        registerFormik.errors.observacion &&
                                        registerFormik.touched.observacion
                                        ? "border-danger"
                                        : ""
                                    }`}
                                    placeholder="Observacion"
                                    value={registerFormik.values.observacion}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    rows={3}
                                ></textarea>
                                {registerFormik.errors.observacion &&
                                    registerFormik.touched.observacion && (
                                    <div className="text-danger text-[13px]">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {registerFormik.errors.observacion}
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