import { GetAllCashLess } from "../services/cashless.services";
import { useQuery } from "react-query";

export const useCashless = () => {
  const queryCashless = useQuery({
    queryKey: "cashless",
    queryFn: GetAllCashLess,
  });
  return queryCashless;
};
