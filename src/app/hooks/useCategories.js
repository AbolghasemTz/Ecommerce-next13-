import { useMutation, useQuery } from "@tanstack/react-query";
import { addNweCategory, getCategories, getOneCategoryById, removeCategory, updateCatwgory } from "../services/CategoriesServices";

export const useGetCategories = () => useQuery({
    queryKey:["get-categories"],
    queryFn:getCategories,
    retry:false,
    refetchOnWindowFocus: true
})

export const useAddCategory = () =>  useMutation({ mutationFn:addNweCategory }) 
export const useRemoveCategory = () => {
    return useMutation({ mutationFn: removeCategory })
}
export const useGetCategoryById = (id) => useQuery({
    queryKey:["get-category",id],
    queryFn:() =>getOneCategoryById(id),
    retry:false,
    refetchOnWindowFocus: true
})
export const useUpdateCategory = () =>  useMutation({ mutationFn:updateCatwgory }) 