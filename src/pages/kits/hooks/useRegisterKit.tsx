import { useMutation } from "react-query"
import { toast } from "sonner";
import { queryClient } from "../../../providers";
import { RegisterNewKit } from "../services/kits.services";

export const useRegisterKit = () => {
    const mutation = useMutation({
        mutationFn: RegisterNewKit,

        onMutate: () => {
            toast.loading("Registrando Kit", {
                description: "Por favor espere un momento",
            });
        },
        onSuccess: () => {
            toast.dismiss();
            queryClient.invalidateQueries({
                queryKey: ["kits"],
            });
            toast.success("✅ ¡Kit Registrado!", {
                description: "El kit fue registrado correctamente",
            });
        },
        onError: (error: any) => {
            toast.dismiss();
            // Verifica si el error es un objeto con la propiedad 'response'
            let errorMessage = "Error al registrar el kit";

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