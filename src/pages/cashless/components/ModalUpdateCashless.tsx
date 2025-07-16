import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import { useUpdateCashlees } from "../hooks/useUpdateCashless";
import { cashlessModel } from "../models/CashlessModel";

interface Props {
  cashless: cashlessModel | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalUpdateCashless = ({ cashless, isOpen, setIsOpen }: Props) => {
  const { mutate: updateMutate } = useUpdateCashlees();

  const CashlessSchema = Yup.object().shape({
    codigo_cliente: Yup.number().required("El código es requerido"),
    Novedad: Yup.string().required("La novedad es requerida"),
  });

  const updateFormik = useFormik({
    initialValues: {
      codigo_cliente: cashless?.codigo_cliente || 0,
      Novedad: cashless?.Novedad || "",
    },
    enableReinitialize: true,
    validationSchema: CashlessSchema,
    onSubmit: async (values) => {
      Swal.fire({
        title: "¿Actualizar novedad?",
        text: "Se actualizarán los datos ingresados.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          if (cashless) {
            updateMutate(
              { ...cashless, ...values },
              {
                onSuccess: () => {
                  updateFormik.resetForm();
                  setIsOpen(false);
                },
              }
            );
          }
        }
      });
    },
  });

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar novedad de cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label className="form-label">
              Código Cliente <span className="text-danger">*</span>
            </label>
            <input
              name="codigo_cliente"
              type="number"
              className={`form-control ${
                updateFormik.errors.codigo_cliente &&
                updateFormik.touched.codigo_cliente
                  ? "border-danger"
                  : ""
              }`}
              value={Number(updateFormik.values.codigo_cliente)}
              onChange={updateFormik.handleChange}
              onBlur={updateFormik.handleBlur}
            />
            {updateFormik.errors.codigo_cliente &&
              updateFormik.touched.codigo_cliente && (
                <div className="text-danger text-sm">
                  {updateFormik.errors.codigo_cliente}
                </div>
              )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              Novedad <span className="text-danger">*</span>
            </label>
            <input
              name="Novedad"
              type="text"
              className={`form-control ${
                updateFormik.errors.Novedad && updateFormik.touched.Novedad
                  ? "border-danger"
                  : ""
              }`}
              value={updateFormik.values.Novedad?.toString() ?? ""}
              onChange={updateFormik.handleChange}
              onBlur={updateFormik.handleBlur}
            />
            {updateFormik.errors.Novedad && updateFormik.touched.Novedad && (
              <div className="text-danger text-sm">
                {updateFormik.errors.Novedad}
              </div>
            )}
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
  );
};
