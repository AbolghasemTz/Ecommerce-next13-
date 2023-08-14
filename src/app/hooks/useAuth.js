import { useQuery } from "@tanstack/react-query";
import { getAllUsers, getUserProfile } from "../services/AuthServices";
export const useGetUser = () => useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus:true
  });

  export const useGetAllUser = () => useQuery({
    queryKey:["get-user"],
    queryFn:getAllUsers,
    retry:false,
    refetchOnWindowFocus: true
})
