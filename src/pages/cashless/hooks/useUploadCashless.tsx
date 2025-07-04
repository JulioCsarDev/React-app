import { toast } from "sonner";
import { useMutation } from "react-query";
import { queryClient } from "../../../providers";
import { UploadCashless } from "../services/cashless.services";


export const useUpLoadCashless = () => {
  const mutation = useMutation({
    mutationFn: UploadCashless,

    onMutate: () => {
      toast.loading("Actualizando Cashless", {
        description: "Por favor espere un momento",
      });
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
        queryKey: ["cashless"],
      });
      toast.success("✅ ¡Actualizado!", {
        description: "El registro fue actulizado correctamente",
      });
    },
    onError: (error: any) => {
      toast.dismiss();
      // Verifica si el error es un objeto con la propiedad 'response'
      let errorMessage = "Error al actualizar el estado";

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
