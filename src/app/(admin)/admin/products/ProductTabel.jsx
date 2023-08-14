export const dynamic = "force-dynamic"
import { productTabelTHead } from '@/src/app/constant/tableHeads'
import { useRemoveProducts } from '@/src/app/hooks/useProduct'

import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'

function ProductTabel({products}) {
 const {mutateAsync} =  useRemoveProducts()
 const queryClient = useQueryClient()
 const removeProduct = async (id) => {
try {
  const {message} = await mutateAsync(id);  
  toast.success(message); 
  queryClient.invalidateQueries({queryKey:["get-products"]})
} catch (error) {
  console.log(error);
}
  }
  return (
    <div className='shadow-sm overflow-auto my-8'>
    <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
      <thead>
          <tr>
              {productTabelTHead.map((item) => {
                  return (
                      <th className="whitespace-nowrap" key={item.id}>
                          {item.label}
                      </th>
                  )
              })}
          </tr>
      </thead>
      <tbody>
        {products.map((product,index) => {
          return <tr key={product._id}>
               <td>{index} =</td>
               <td className="truncate whitespace-nowrap">{product.title}</td>
               <td>{product.category?.title}</td>
               <td>{product.price}</td>
               <td>{product.discount}</td>
               <td>{product.offPrice}</td>
               <td>{product.countInStock}</td>
               
               <td className='flex items-center'>
               <Link className='font-semibold' href={`/admin/products/${product._id}`}>
                مشاهده
               </Link>
               <button onClick={() => removeProduct(product._id)} className='mx-3 text-red-500'>del</button>
               <Link className='font-semibold' href={`/admin/products/edit/${product._id}`}>
                ed
               </Link>
                </td>
              
               
          </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default ProductTabel
