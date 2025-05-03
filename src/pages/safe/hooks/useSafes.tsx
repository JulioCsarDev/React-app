import { useQuery } from "react-query";
import { GetAllSafe } from "../services/safe.services";

export const useSafes = () => {
    const querysafes = useQuery({
        queryKey: "safes",
        queryFn: GetAllSafe,
    });
    return querysafes;
};