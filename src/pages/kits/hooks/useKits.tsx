import { useQuery } from "react-query";
import { GetAllKits } from "../services/kits.services";

export const useKits = () => {
    const querykits = useQuery({
        queryKey: "kits",
        queryFn: GetAllKits,
    });
    return querykits;
};