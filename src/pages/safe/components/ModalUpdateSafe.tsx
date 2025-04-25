// import { Modal } from 'react-bootstrap';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Swal from "sweetalert2";
// import { useUpdatesafe } from "../hooks/useUpdateSafe";
// import { SafeUpdateSafeModel } from '../models/safe.models';
// import { useEffect } from 'react';

// interface Props {
//     safe: SafeUpdateSafeModel | null;
//     isOpen: boolean;
//     setIsOpen: (isOpen: boolean) => void;
// }

// export const ModalUpdatesafe = ({ safe, isOpen, setIsOpen }: Props) => {
//     const { mutate: updateMutate } = useUpdatesafe();

//     const safeSchema = Yup.object().shape({
//         placa_vehiculo: Yup.string().required("La Placa es requerida"),
//         gasas_limpias: Yup.boolean().required("Es requerida"),
//         esparadrapo_tela: Yup.boolean().required("Es requerida"),
//         baja_lenguas: Yup.boolean().required("Es requerida"),
//         guantes_latex: Yup.boolean().required("Es requerida"),
//         venda_elastica_2: Yup.boolean().required("Es requerida"),
//         venda_elastica_3: Yup.boolean().required("Es requerida"),
//         venda_elastica_5: Yup.boolean().required("Es requerida"),
//         venda_algodon: Yup.boolean().required("Es requerida"),
//         yodopovidona: Yup.boolean().required("Es requerida"),
//         solucion_salina: Yup.boolean().required("Es requerida"),
//         termometro_digital: Yup.boolean().required("Es requerida"),
//         alcohol_antiseptico: Yup.boolean().required("Es requerida"),
//         botella_agua: Yup.boolean().required("Es requerida"),
//         bandas_adhesivas: Yup.boolean().required("Es requerida"),
//         tijeras_punta_roma: Yup.boolean().required("Es requerida"),
//         pito_emergencias: Yup.boolean().required("Es requerida"),
//         manual_primeros_auxilios: Yup.boolean().required("Es requerida"),
//         observacion: Yup.string().required("La observacion es requerida"),
//     });

//     const updateFormik = useFormik({
//         initialValues: {
//             id_inspeccion_safe: safe?.id_inspeccion_safe || 0,
            
            
//         },
//         validationSchema: safeSchema,
//         onSubmit: async (values) => {
//             Swal.fire({
//                 title: "Actualizar safe",
//                 text: "Se actualizarán los datos ingresados.",
//                 icon: "question",
//                 showCancelButton: true,
//                 confirmButtonText: "Sí, Actualizar",
//                 cancelButtonText: "Cancelar",
//                 customClass: {
//                     popup: "max-w-md p-4 bg-white rounded-lg shadow-xl",
//                     title: "text-xl font-bold text-gray-800",
//                     confirmButton: "btn btn-primary text-sm",
//                     cancelButton: "btn btn-secondary text-sm",
//                 },
//                 didOpen: () => {
//                     document.body.classList.remove("swal2-shown", "swal2-height-auto");
//                 },
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     updateMutate(values, {
//                         onSuccess: () => {
//                             updateFormik.resetForm();
//                             setIsOpen(false);
//                         },
//                     });
//                 }
//             });
//         },
//     });

//     useEffect(() => {
//         if (safe) {
//             // Usar setValues para actualizar todos los campos a la vez
//             updateFormik.setValues({
//                 id_inspeccion_safe: safe.id_inspeccion_safe || 0,

//             });
//         }
//     }, [safe]);
    
//     return (
//         <>
//             <Modal size="lg" show={isOpen} onHide={() => setIsOpen(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Actualizar safe</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form onSubmit={(e) => {
//                         e.preventDefault();
//                         updateFormik.handleSubmit();
//                     }}>
//                         <div className="row mb-3">
//                             <div className="col-12 mb-3">
//                                 <label className="form-label mb-2">
//                                     Placa Vehículo
//                                     <span className="text-danger">*</span>
//                                 </label>
//                                 <input
//                                     name="placa_vehiculo"
//                                     className={`form-control ${
//                                         updateFormik.errors.placa_vehiculo && updateFormik.touched.placa_vehiculo
//                                             ? "border-danger"
//                                             : ""
//                                     }`}
//                                     placeholder="Placa del vehículo"
//                                     type="text"
//                                     value={updateFormik.values.placa_vehiculo}
//                                     onChange={updateFormik.handleChange}
//                                     onBlur={updateFormik.handleBlur}
//                                 />
//                                 {updateFormik.errors.placa_vehiculo && updateFormik.touched.placa_vehiculo && (
//                                     <div className="text-danger text-sm">
//                                         <i className="ki-filled ki-information me-1"></i>
//                                         {updateFormik.errors.placa_vehiculo}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
                        
//                         <div className="row mb-3">
//                             <div className="col-md-6 mb-3">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         name="gasas_limpias"
//                                         id="gasas_limpias"
//                                         className="form-check-input"
//                                         checked={updateFormik.values.gasas_limpias}
//                                         onChange={updateFormik.handleChange}
//                                         onBlur={updateFormik.handleBlur}
//                                     />
//                                     <label htmlFor="gasas_limpias" className="form-check-label">
//                                         Gasas Limpias
//                                         <span className="text-danger">*</span>
//                                     </label>
//                                 </div>
//                                 {updateFormik.errors.gasas_limpias && updateFormik.touched.gasas_limpias && (
//                                     <div className="text-danger text-sm">
//                                         {updateFormik.errors.gasas_limpias}
//                                     </div>
//                                 )}
//                             </div>
                            
//                             <div className="col-md-6 mb-3">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         name="esparadrapo_tela"
//                                         id="esparadrapo_tela"
//                                         className="form-check-input"
//                                         checked={updateFormik.values.esparadrapo_tela}
//                                         onChange={updateFormik.handleChange}
//                                         onBlur={updateFormik.handleBlur}
//                                     />
//                                     <label htmlFor="esparadrapo_tela" className="form-check-label">
//                                         Esparadrapo de Tela
//                                         <span className="text-danger">*</span>
//                                     </label>
//                                 </div>
//                                 {updateFormik.errors.esparadrapo_tela && updateFormik.touched.esparadrapo_tela && (
//                                     <div className="text-danger text-sm">
//                                         {updateFormik.errors.esparadrapo_tela}
//                                     </div>
//                                 )}
//                             </div>
                            
//                             {/* Repetiría el mismo patrón para los demás campos checkbox */}
//                             {/* Por brevedad, solo muestro dos campos más como ejemplo */}
                            
//                             <div className="col-md-6 mb-3">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         name="baja_lenguas"
//                                         id="baja_lenguas"
//                                         className="form-check-input"
//                                         checked={updateFormik.values.baja_lenguas}
//                                         onChange={updateFormik.handleChange}
//                                         onBlur={updateFormik.handleBlur}
//                                     />
//                                     <label htmlFor="baja_lenguas" className="form-check-label">
//                                         Baja Lenguas
//                                         <span className="text-danger">*</span>
//                                     </label>
//                                 </div>
//                                 {updateFormik.errors.baja_lenguas && updateFormik.touched.baja_lenguas && (
//                                     <div className="text-danger text-sm">
//                                         {updateFormik.errors.baja_lenguas}
//                                     </div>
//                                 )}
//                             </div>
                            
//                             <div className="col-md-6 mb-3">
//                                 <div className="form-check">
//                                     <input
//                                         type="checkbox"
//                                         name="guantes_latex"
//                                         id="guantes_latex"
//                                         className="form-check-input"
//                                         checked={updateFormik.values.guantes_latex}
//                                         onChange={updateFormik.handleChange}
//                                         onBlur={updateFormik.handleBlur}
//                                     />
//                                     <label htmlFor="guantes_latex" className="form-check-label">
//                                         Guantes de Látex
//                                         <span className="text-danger">*</span>
//                                     </label>
//                                 </div>
//                                 {updateFormik.errors.guantes_latex && updateFormik.touched.guantes_latex && (
//                                     <div className="text-danger text-sm">
//                                         {updateFormik.errors.guantes_latex}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
                        
//                         {/* Campo observación al final */}
//                         <div className="row">
//                             <div className="col-12">
//                                 <label className="form-label mb-2">
//                                     Observación
//                                     <span className="text-danger">*</span>
//                                 </label>
//                                 <textarea
//                                     name="observacion"
//                                     className={`form-control ${
//                                         updateFormik.errors.observacion && updateFormik.touched.observacion
//                                             ? "border-danger"
//                                             : ""
//                                     }`}
//                                     placeholder="Observaciones"
//                                     value={updateFormik.values.observacion}
//                                     onChange={updateFormik.handleChange}
//                                     onBlur={updateFormik.handleBlur}
//                                     rows={3}
//                                 />
//                                 {updateFormik.errors.observacion && updateFormik.touched.observacion && (
//                                     <div className="text-danger text-sm">
//                                         <i className="ki-filled ki-information me-1"></i>
//                                         {updateFormik.errors.observacion}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <button
//                         className="btn btn-outline-secondary"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         Cancelar
//                     </button>
//                     <button
//                         className="btn btn-primary"
//                         onClick={() => updateFormik.handleSubmit()}
//                         disabled={!updateFormik.isValid}
//                     >
//                         Actualizar
//                     </button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };