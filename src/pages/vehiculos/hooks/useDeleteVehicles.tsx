import { toast } from "sonner";
import { useMutation } from "react-query";
import { queryClient } from "../../../providers";
import { DeleteVehicles } from "../services/vehicles.services";

export const useDeleteVehicles = () => {
  const mutation = useMutation({
    mutationFn: DeleteVehicles,

    onMutate: () => {
      toast.loading("Eliminando Vehiculo", {
        description: "Por favor espere un momento",
      });
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
      toast.success("✅ ¡Vehiculo Eliminado!", {
        description: "El vehiculo fue eliminado correctamente",
      });
    },
    onError: (error: any) => {
      toast.dismiss();
      // Verifica si el error es un objeto con la propiedad 'response'
      let errorMessage = "Error al eliminado el vehiculo";

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
