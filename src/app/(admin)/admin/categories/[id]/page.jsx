"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetCategoryById } from '../../../../hooks/useCategories';

function page() {
    const {id} = useParams();
    const {data} = useGetCategoryById(id);
    const {category} = data || {}
   
  return (
    <div>
      <p>{category?.title}</p>
    </div>
  )
}

export default page
