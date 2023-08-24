"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAddCategory } from "../../../../hooks/useCategories";
import CategoryForm from "../../../../components/CategoryForm";

function page() {
  const router = useRouter();
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const [selectedType, setSecetedType] = useState("");
  console.log(selectedType);
  const { isLoading, mutateAsync } = useAddCategory();
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
        type: selectedType.value,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">افزودن بسته بندی جدید</h1>
      <div className="max-w-sm mb-10">
        <CategoryForm
          onSubmit={handleSubmit}
          handleChange={handleChange}
          category={category}
          selectedType={selectedType}
          setSecetedType={setSecetedType}
        />
      </div>
    </div>
  );
}

export default page;
