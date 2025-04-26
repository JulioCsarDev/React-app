import { useQuery } from "react-query";
import { GetAllSafe } from "../services/safe.services";

export const usesafes = () => {
    const querysafes = useQuery({
        queryKey: "safes",
        queryFn: GetAllSafe,
    });
    return querysafes;
};