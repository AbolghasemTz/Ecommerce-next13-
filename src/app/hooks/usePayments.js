import { useQuery } from "@tanstack/react-query";
import { getAllPayments } from "../services/paymentService";

export const useGetPayments = () =>
  useQuery({ queryKey: ["payments"], queryFn: getAllPayments, retry: false });
