"use client"

import ProductTabel from './ProductTabel';
import Link from 'next/link';
import Loading from '../../../common/Loading';
import { useGetProducts } from '../../../hooks/useProduct';

function page() {
  const {isLoading,data} =  useGetProducts();
  const {products} = data || {}
console.log(products);
  if(isLoading) return <Loading />
  return (
    <div>
        <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold mb-5">محصولات</h1>
        <Link className="text-xl font-bold mb-5" href={`/admin/products/add`}>اضافه کردن محصول</Link>

        </div>
      <ProductTabel products={products}/>
    </div>
  )
}

export default page
