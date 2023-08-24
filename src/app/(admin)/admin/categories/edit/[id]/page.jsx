"use client"
export const dynamic = "force-dynamic"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast';
import { useGetCategoryById, useUpdateCategory } from '../../../../../hooks/useCategories';
import CategoryForm, { categoryType } from '../../../../../components/CategoryForm';
import { includeObj } from '../../../../../utils/objectUtils';
const includesCategoryKey = ["title","englishTitle", "description"]
function page() {
  const {id} = useParams();
  const {data} = useGetCategoryById(id);
  const {category} = data || {}
  const [formData,setFormData] = useState({})
  const [selectedType, setSecetedType] = useState("");
  const {mutateAsync}= useUpdateCategory()
  const router = useRouter();

useEffect(() => {
  if (category) {
    setSecetedType(categoryType.find(c => c.value ===  category?.type))
    setFormData(includeObj(category, includesCategoryKey));
  }
}, [data]);
console.log(formData,"taziki");
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id:category._id,
        data: {
      ...formData,
      type: selectedType.value,
       
      },
    id:category._id
    });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
 
  return (
    <div>
       <h1 className="mb-6 font-bold text-xl">ویرایش بسته بندی جدید</h1>
      <div className="max-w-sm mb-10">
        <CategoryForm
          onSubmit={handleSubmit}
          handleChange={handleChange}
          category={formData}
          selectedType={categoryType.find((c) => c.value ===  category?.type)}
          setSecetedType={setSecetedType}
        />
      </div>
    </div>
  )
}

export default page
