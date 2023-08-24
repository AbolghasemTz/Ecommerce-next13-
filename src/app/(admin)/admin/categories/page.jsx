"use client"
import React from 'react'
import CategoryListTabel from './CategoryListTabel';
import Link from 'next/link';
import Loading from '../../../common/Loading';
import { useGetCategories } from '../../../hooks/useCategories';

function page() {
 const {isLoading,data} =  useGetCategories();
  const {categories} = data || {}
console.log(categories);
  if(isLoading) return <Loading />
  return (
    <div>
        <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold mb-5">دسته بتدی </h1>
        <Link className="text-xl font-bold mb-5" href={`/admin/categories/add`}>اضافه کردن دسته بندی</Link>

        </div>
      <CategoryListTabel categories={categories}/>
    </div>
  )
}

export default page
