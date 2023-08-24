"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetProductById } from '../../../../hooks/useProduct';

function page() {
    const {id} = useParams()
  const {data} = useGetProductById(id);
  const {product} = data || {}
  return (
    <div>
      <h1>{product?.title}</h1>
      <h1>{product?.brand}</h1>
    </div>
  )
}

export default page
