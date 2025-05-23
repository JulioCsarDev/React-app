import { useMutation } from "react-query";
import { toast } from "sonner";
import { queryClient } from "../../../providers";
import { UploadSafe } from "../services/safe.services";


export const useUpdatesafe = () => {
    const mutation = useMutation({
        mutationFn: UploadSafe,

        onMutate: () => {
            toast.loading("Actualizando safe", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["safes"],
            });
            toast.success("✅ ¡Botiquin Actualizado!", {
                description: "El safe fue actulizado correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
   
            let errorMessage = "Error al actualizar el safe";

            if (error?.response?.data?.detail) {
                errorMessage = error.response.data.detail;
            } else if (error?.message) {

                errorMessage = error.message;
            }

            toast.error("❌ Ha Ocurrido un Error", {
                description: errorMessage,
            });
        },
    });
    return mutation;
};