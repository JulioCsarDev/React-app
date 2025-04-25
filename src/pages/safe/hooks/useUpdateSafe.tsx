// import { useMutation } from "react-query";
// import { toast } from "sonner";
// import { queryClient } from "../../../providers";
// import { Uploadsafe } from "../services/safe.services";

// export const useUpdatesafe = () => {
//     const mutation = useMutation({
//         mutationFn: Uploadsafe,

//         onMutate: () => {
//             toast.loading("Actualizando safe", {
//                 description: "Por favor espere un momento",
//             });
//         },
//         onSuccess: () => {
//             toast.dismiss();
//             queryClient.invalidateQueries({
//                 queryKey: ["safes"],
//             });
//             toast.success("✅ ¡safe Actualizado!", {
//                 description: "El safe fue actulizado correctamente",
//             });
//         },
//         onError: (error: any) => {
//             toast.dismiss();
//             // Verifica si el error es un objeto con la propiedad 'response'
//             let errorMessage = "Error al actualizar el safe";

//             if (error?.response?.data?.detail) {
//                 // Si existe 'response' y 'detail', accede al detalle del error
//                 errorMessage = error.response.data.detail;
//             } else if (error?.message) {
//                 // Si el error tiene un mensaje general, usa ese mensaje
//                 errorMessage = error.message;
//             }

//             toast.error("❌ Ha Ocurrido un Error", {
//                 description: errorMessage,
//             });
//         },
//     });
//     return mutation;
// };