import { useMutation } from "react-query";
import { toast } from "sonner";
import { queryClient } from "../../../providers";
import { DeleteSafe } from "../services/safe.services";



export const useDeleteSafe = () => {

    const mutation = useMutation({
        mutationFn: DeleteSafe,

        onMutate: () => {
            toast.loading("Eliminando caja fuerte", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["safes"],
            });
            toast.success("✅ ¡Caja fuerte eliminada!", {
                description: "La caja fuerte fue eliminada correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
            // Verifica si el error es un objeto con la propiedad 'response'
            let errorMessage = "Error al eliminado la cafa fuerte";

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

}