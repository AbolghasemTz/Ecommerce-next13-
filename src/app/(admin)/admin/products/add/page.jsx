"use client";
import React, { useState } from "react";
// import TextField from "@/src/common/TextField";
import { TagsInput } from "react-tag-input-component";
// import Select from "react-select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useGetCategories } from "../../../../hooks/useCategories";
import { useAddProduct } from "../../../../hooks/useProduct";
import ProductForm from "../../../../components/ProductForm";

const productFormData = [
  { id: 1, label: "عنوان", name: "title" },
  { id: 2, label: "توضیحات", name: "description" },
  { id: 3, label: "اسلاگ", name: "slug" },
  { id: 4, label: "برند", name: "brand" },
  { id: 5, label: "قیمت", name: "price" },
  { id: 6, label: "تخفیف", name: "offPrice" },
  { id: 7, label: "قیمت روی تخفیف", name: "discount" },
  { id: 8, label: "موجودی", name: "countInStock" },
  { id: 9, label: "لینک عکس محصول", name: "imageLink" },
];

function addProductPage() {
  const { mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    countInStock: "",
    imageLink: "",
  });

  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   console.log(selectedCategory);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      toast.success(message);
      router.push("/admin/products");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full max-w-sm">
      <h1>اصافه کردن محصول</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        tags={tags}
        setTags={setTags}
        productData={formData}
        productDataOnChange={handleChange}
      />
    </div>
  );
}

export default addProductPage;
