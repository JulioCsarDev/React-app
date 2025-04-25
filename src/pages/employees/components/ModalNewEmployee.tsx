import * as Yup from "yup";
import Swal from "sweetalert2";
import { useState } from "react";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import { useRegisterEmployee } from "../hooks/useRegisterEmployees";

export const ModalNewEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);

    const { mutate: registerMutate } = useRegisterEmployee();

    const EmployeeSchema = Yup.object().shape({
        CC: Yup.number().required("La Cédula es requerida"),
        NOM: Yup.string().required("El Nombre es requerido"),
        CAR: Yup.string().required("El Cargo es requerido"),
        CENTRO: Yup.string().required("Es requerido"),
    });

    const registerFormik = useFormik({
        initialValues: {
            CC: undefined,
            NOM: "",
            CAR: "",
            CENTRO: "",
        },
        validationSchema: EmployeeSchema,
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
            <button className="btn btn-outline-primary me-2 btn-sm" onClick={openModal}>
                <i className="bi bi-person-fill-add me-2 fs-5"></i>
                Agregar Empleado
            </button>
            <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Empleado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label className="form-label mb-2">
                                    Cedula
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="CC"
                                    className={`form-control ${registerFormik.errors.CC &&
                                        registerFormik.touched.CC
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Cedula"
                                    type="number"
                                    value={registerFormik.values.CC}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                />
                                {registerFormik.errors.CC &&
                                    registerFormik.touched.CC && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {registerFormik.errors.CC}
                                        </div>
                                    )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Nombre y Apellido
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="NOM"
                                    className={`form-control ${registerFormik.errors.NOM &&
                                        registerFormik.touched.NOM
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Nombre"
                                    type="text"
                                    value={registerFormik.values.NOM}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                />
                                {registerFormik.errors.NOM &&
                                    registerFormik.touched.NOM && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {registerFormik.errors.NOM}
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <label className="form-label mb-2">
                                    Cargo
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="CAR"
                                    className={`form-control ${registerFormik.errors.CAR && registerFormik.touched.CAR
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Cargo"
                                    type="text"
                                    value={registerFormik.values.CAR}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                />
                                {registerFormik.errors.CAR &&
                                    registerFormik.touched.CAR && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {registerFormik.errors.CAR}
                                        </div>
                                    )}
                            </div>
                            <div className="col">
                                <label className="form-label mb-2">
                                    Centro
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="CENTRO"
                                    className={`form-control ${registerFormik.errors.CENTRO &&
                                        registerFormik.touched.CENTRO
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder=""
                                    type="text"
                                    value={registerFormik.values.CENTRO}
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                />
                                {registerFormik.errors.CENTRO &&
                                    registerFormik.touched.CENTRO && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {registerFormik.errors.CENTRO}
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
