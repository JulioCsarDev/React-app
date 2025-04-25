import { toast } from "sonner";
import { useMutation } from "react-query";
import { queryClient } from "../../../providers";
import { UploadEmployee } from "../services/employees.services";

export const useUpdateEmployee = () => {
    const mutation = useMutation({
        mutationFn: UploadEmployee,

        onMutate: () => {
            toast.loading("Actualizando Conductor", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });
            toast.success("✅ ¡Empleado Actualizado!", {
                description: "El empleado fue actualizado correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
            // Verifica si el error es un objeto con la propiedad 'response'
            let errorMessage = "Error al actualizar el empleado";

            if (error?.response?.data?.detail) {
                // Si existe 'response' y 'detail', accede al detalle del error
                errorMessage = error.response.data.detail;
            } else if (error?.message) {
                // Si el error tiene un mensaje general, usa ese mensaje
                errorMessage = error.message;
            }

            toast.error("❌ Ha Ocurrido un Error", {
                description: errorMessage,
            });
        },
    });

    return mutation;
};
