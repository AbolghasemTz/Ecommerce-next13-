"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useGetProductById, useUpdateProduct } from "../../../../../hooks/useProduct";
import { useGetCategories } from "../../../../../hooks/useCategories";
import ProductForm from "../../../../../components/ProductForm";
import { includeObj } from "../../../../../utils/objectUtils";
const includesProductKey = [
  "title",
  "description",
  "slug",
  "brand",
  "price",
  "offPrice",
  "discount",
  "countInStock",
  "imageLink",
];
function page() {
  const { id } = useParams();
  const { data } = useGetProductById(id);
  const { product } = data || {};
  const { data: categoryData } = useGetCategories();
  const { categories } = categoryData || {};
  const [formData, setFormData] = useState({});

  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { isLoading, mutateAsync } = useUpdateProduct();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   console.log(selectedCategory);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        productId: product._id,
        data: { ...formData,tags, category: selectedCategory._id },
      });
      toast.success(message);
      router.push("/admin/products");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setTags(product.tags);
      setSelectedCategory(product.category);
      setFormData(includeObj(product, includesProductKey));
    }
  }, [data]);
  return (
    <div className="w-full max-w-sm">
      <h1>آپدیت کردن محصول</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={product?.category}
        tags={tags}
        setTags={setTags}
        productData={formData}
        productDataOnChange={handleChange}
      />
    </div>
  );
}

export default page;
