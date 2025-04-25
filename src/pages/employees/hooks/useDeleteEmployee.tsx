import { toast } from "sonner";
import { useMutation } from "react-query";
import { queryClient } from "../../../providers";
import { DeleteEmployees } from "../services/employees.services";

export const useDeleteEmployee = () => {
    const mutation = useMutation({
        mutationFn: DeleteEmployees,

        onMutate: () => {
            toast.loading("Eliminando Conductor", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });
            toast.success("✅ ¡Empleado Eliminado!", {
                description: "El empleado fue eliminado correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
            // Verifica si el error es un objeto con la propiedad 'response'
            let errorMessage = "Error al eliminado el empleado";

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
