import { toast } from "sonner";
import { useMutation } from "react-query";
import { queryClient } from "../../../providers";
import { DeleteCashless } from "../services/cashless.services";

export const useDeleteCashless = () => {
    const mutation = useMutation({
        mutationFn: DeleteCashless,

        onMutate: () => {
            toast.loading("Eliminando Cliente", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["cashless"],
            });
            toast.success("✅ ¡Cliente Eliminado!", {
                description: "El cliente fue eliminado correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
            // Verifica si el error es un objeto con la propiedad 'response'
            let errorMessage = "Error al eliminado el cliente";

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
