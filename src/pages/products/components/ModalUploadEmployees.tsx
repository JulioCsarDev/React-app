import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";
import { UpdateEmployeesModel } from "../models/employees.models";
import { useEffect } from "react";

interface Props {
    employee: UpdateEmployeesModel | null;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalUpdateEmployee = ({ employee, isOpen, setIsOpen }: Props) => {
    const openModal = () => setIsOpen(true);

    const { mutate: updateMutate } = useUpdateEmployee();

    const UpdateEmployeesSchema = Yup.object().shape({
        CC: Yup.number().required("La Cédula es requerida"),
        NOM: Yup.string().required("El Nombre es requerido"),
        CAR: Yup.string().required("El Cargo es requerido"),
        CENTRO: Yup.string().required("El Centro es requerido"),
    });

    const updateFormik = useFormik({
        initialValues: {
            CC: employee?.CC || undefined,
            NOM: employee?.NOM || "",
            CAR: employee?.CAR || "",
            CENTRO: employee?.CENTRO || "",
        },
        validationSchema: UpdateEmployeesSchema,
        onSubmit: async (values) => {
            Swal.fire({
                title: "Actualizar Conductor",
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
                    updateMutate(values, {
                        onSuccess: () => {
                            updateFormik.resetForm();
                            setIsOpen(false);
                        },
                    });
                }
            });
        },
    });
    useEffect(() => {
        if (employee) {
            updateFormik.setFieldValue("CC", employee.CC);
            updateFormik.setFieldValue("NOM", employee.NOM);
            updateFormik.setFieldValue("CAR", employee.CAR);
            updateFormik.setFieldValue("CENTRO", employee.CENTRO);

        }
    }, [employee]);

    return (
        <>
            <button className="btn btn-outline-primary me-2 btn-sm" onClick={openModal}>
                <i className="bi bi-person-fill-add me-2 fs-5"></i>
                Actualizar Empleado
            </button>
            <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Empleado</Modal.Title>
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
                                    className={`form-control ${updateFormik.errors.CC &&
                                        updateFormik.touched.CC
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Cedula"
                                    type="number"
                                    value={updateFormik.values.CC}
                                    onChange={updateFormik.handleChange}
                                    onBlur={updateFormik.handleBlur}
                                />
                                {updateFormik.errors.CC &&
                                    updateFormik.touched.CC && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {updateFormik.errors.CC}
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
                                    className={`form-control ${updateFormik.errors.NOM &&
                                        updateFormik.touched.NOM
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Nombre"
                                    type="text"
                                    value={updateFormik.values.NOM}
                                    onChange={updateFormik.handleChange}
                                    onBlur={updateFormik.handleBlur}
                                />
                                {updateFormik.errors.NOM &&
                                    updateFormik.touched.NOM && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {updateFormik.errors.NOM}
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
                                    className={`form-control ${updateFormik.errors.CAR && updateFormik.touched.CAR
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Cargo"
                                    type="text"
                                    value={updateFormik.values.CAR}
                                    onChange={updateFormik.handleChange}
                                    onBlur={updateFormik.handleBlur}
                                />
                                {updateFormik.errors.CAR &&
                                    updateFormik.touched.CAR && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {updateFormik.errors.CAR}
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
                                    className={`form-control ${updateFormik.errors.CENTRO &&
                                        updateFormik.touched.CENTRO
                                        ? "border-danger"
                                        : ""
                                        }`}
                                    placeholder="Centro"
                                    type="text"
                                    value={updateFormik.values.CENTRO}
                                    onChange={updateFormik.handleChange}
                                    onBlur={updateFormik.handleBlur}
                                />
                                {updateFormik.errors.CENTRO &&
                                    updateFormik.touched.CENTRO && (
                                        <div className="text-danger text-[13px]">
                                            <i className="ki-filled ki-information me-1"></i>
                                            {updateFormik.errors.CENTRO}
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
                        onClick={() => updateFormik.handleSubmit()}
                        disabled={!updateFormik.isValid || !updateFormik.dirty}
                    >
                        Actualizar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
