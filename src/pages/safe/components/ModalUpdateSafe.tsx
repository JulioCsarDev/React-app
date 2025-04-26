import { Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import { useUpdatesafe } from "../hooks/useUpdateSafe";
import { SafeUpdateSafeModel } from '../models/safe.models';
import { useEffect } from 'react';

interface Props {
    safe: SafeUpdateSafeModel;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalUpdateSafe = ({ safe, isOpen, setIsOpen }: Props) => {
    const { mutate: updateMutate } = useUpdatesafe();

    const SafeSchema = Yup.object().shape({
        placa_vehiculo: Yup.string().required("La Placa es requerida"),
        puerta_estado: Yup.boolean().required("Es requerida"),
        puerta_facilidad: Yup.boolean().required("Es requerida"),
        clave_precisa: Yup.boolean().required("Es requerida"),
        clave_autorizada: Yup.boolean().required("Es requerida"),
        perilla_funciona: Yup.boolean().required("Es requerida"),
        numeros_visibles: Yup.boolean().required("Es requerida"),
        caja_anclada: Yup.boolean().required("Es requerida"),
        observacion: Yup.string().required("La observación es requerida"),
    });

    const updateFormik = useFormik({
        initialValues: {
            id_inspeccion_safe: safe?.id_inspeccion_safe || 0,
            placa_vehiculo: safe?.placa_vehiculo || '',
            puerta_estado: safe?.puerta_estado || false,
            puerta_facilidad: safe?.puerta_facilidad || false,
            clave_precisa: safe?.clave_precisa || false,
            clave_autorizada: safe?.clave_autorizada || false,
            perilla_funciona: safe?.perilla_funciona || false,
            numeros_visibles: safe?.numeros_visibles || false,
            caja_anclada: safe?.caja_anclada || false,
            observacion: safe?.observacion || '',
        },
        validationSchema: SafeSchema,
        onSubmit: async (values) => {
            Swal.fire({
                title: "Actualizar Caja Fuerte",
                text: "Se actualizarán los datos ingresados.",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Sí, Actualizar",
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
        if (safe) {
            // Usar setValues para actualizar todos los campos a la vez
            updateFormik.setValues({
                id_inspeccion_safe: safe.id_inspeccion_safe,
                placa_vehiculo: safe.placa_vehiculo,
                puerta_estado: safe.puerta_estado,
                puerta_facilidad: safe.puerta_facilidad,
                clave_precisa: safe.clave_precisa,
                clave_autorizada: safe.clave_autorizada,
                perilla_funciona: safe.perilla_funciona,
                numeros_visibles: safe.numeros_visibles,
                caja_anclada: safe.caja_anclada,
                observacion: safe.observacion,
            });
        }
    }, [safe]);
    
    return (
        <>
            <Modal size="lg" show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Caja Fuerte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        updateFormik.handleSubmit();
                    }}>
                         <div className="col-12 mb-3">
                            <label className="form-label mb-2">
                                Placa Vehículo
                                <span className="text-danger">*</span>
                            </label>
                            <input
                                name="placa_vehiculo"
                                className={`form-control ${
                                    updateFormik.errors.placa_vehiculo && updateFormik.touched.placa_vehiculo
                                        ? "border-danger"
                                        : ""
                                }`}
                                placeholder="Placa del vehículo"
                                type="text"
                                value={updateFormik.values.placa_vehiculo}
                                onChange={updateFormik.handleChange}
                                onBlur={updateFormik.handleBlur}
                            />
                            {updateFormik.errors.placa_vehiculo && updateFormik.touched.placa_vehiculo && (
                                <div className="text-danger text-sm">
                                    <i className="ki-filled ki-information me-1"></i>
                                    {updateFormik.errors.placa_vehiculo}
                                </div>
                            )}
                        </div>
                        
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="puerta_estado"
                                        id="puerta_estado"
                                        className="form-check-input"
                                        checked={updateFormik.values.puerta_estado}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="puerta_estado" className="form-check-label">
                                        Estado de la Puerta
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.puerta_estado && updateFormik.touched.puerta_estado && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.puerta_estado}
                                    </div>
                                )}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="puerta_facilidad"
                                        id="puerta_facilidad"
                                        className="form-check-input"
                                        checked={updateFormik.values.puerta_facilidad}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="puerta_facilidad" className="form-check-label">
                                        Facilidad de Apertura
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.puerta_facilidad && updateFormik.touched.puerta_facilidad && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.puerta_facilidad}
                                    </div>
                                )}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="clave_precisa"
                                        id="clave_precisa"
                                        className="form-check-input"
                                        checked={updateFormik.values.clave_precisa}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="clave_precisa" className="form-check-label">
                                        Clave Precisa
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.clave_precisa && updateFormik.touched.clave_precisa && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.clave_precisa}
                                    </div>
                                )}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="clave_autorizada"
                                        id="clave_autorizada"
                                        className="form-check-input"
                                        checked={updateFormik.values.clave_autorizada}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="clave_autorizada" className="form-check-label">
                                        Clave Autorizada
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.clave_autorizada && updateFormik.touched.clave_autorizada && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.clave_autorizada}
                                    </div>
                                )}
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="perilla_funciona"
                                        id="perilla_funciona"
                                        className="form-check-input"
                                        checked={updateFormik.values.perilla_funciona}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="perilla_funciona" className="form-check-label">
                                        Funcionamiento de Perilla
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.perilla_funciona && updateFormik.touched.perilla_funciona && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.perilla_funciona}
                                    </div>
                                )}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="numeros_visibles"
                                        id="numeros_visibles"
                                        className="form-check-input"
                                        checked={updateFormik.values.numeros_visibles}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="numeros_visibles" className="form-check-label">
                                        Números Visibles
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.numeros_visibles && updateFormik.touched.numeros_visibles && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.numeros_visibles}
                                    </div>
                                )}
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="caja_anclada"
                                        id="caja_anclada"
                                        className="form-check-input"
                                        checked={updateFormik.values.caja_anclada}
                                        onChange={updateFormik.handleChange}
                                        onBlur={updateFormik.handleBlur}
                                    />
                                    <label htmlFor="caja_anclada" className="form-check-label">
                                        Caja Anclada
                                        <span className="text-danger">*</span>
                                    </label>
                                </div>
                                {updateFormik.errors.caja_anclada && updateFormik.touched.caja_anclada && (
                                    <div className="text-danger text-sm">
                                        {updateFormik.errors.caja_anclada}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Campo observación al final */}
                        <div className="row">
                            <div className="col-12">
                                <label className="form-label mb-2">
                                    Observación
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    name="observacion"
                                    className={`form-control ${
                                        updateFormik.errors.observacion && updateFormik.touched.observacion
                                            ? "border-danger"
                                            : ""
                                    }`}
                                    placeholder="Observaciones"
                                    value={updateFormik.values.observacion}
                                    onChange={updateFormik.handleChange}
                                    onBlur={updateFormik.handleBlur}
                                    rows={3}
                                />
                                {updateFormik.errors.observacion && updateFormik.touched.observacion && (
                                    <div className="text-danger text-sm">
                                        <i className="ki-filled ki-information me-1"></i>
                                        {updateFormik.errors.observacion}
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
                        disabled={!updateFormik.isValid}
                    >
                        Actualizar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};