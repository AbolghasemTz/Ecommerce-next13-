import { categoriesTabelTHead } from '@/src/app/constant/tableHeads';
import { useRemoveCategory } from '@/src/app/hooks/useCategories';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-hot-toast';

function CategoryListTabel({categories}) {
  const {mutateAsync} =  useRemoveCategory()
  const queryClient = useQueryClient()
  const removeCategoy = async (id) => {
 try {
   const {message} = await mutateAsync(id);  
   toast.success(message); 
   queryClient.invalidateQueries({queryKey:["get-categories"]})
 } catch (error) {
   console.log(error);
 }
}
  return (
    <div className='shadow-sm overflow-auto my-8'>
    <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
      <thead>
          <tr>
              {categoriesTabelTHead.map((item) => {
                  return (
                      <th className="whitespace-nowrap" key={item.id}>
                          {item.label}
                      </th>
                  )
              })}
          </tr>
      </thead>
      <tbody>
        {categories.map((category,index) => {
          return <tr key={category._id}>
               <td>{index} =</td>
               <td className="truncate whitespace-nowrap">{category.title}</td>
               
               <td>{category.description}</td>
               <td>{category.englishTitle}</td>
               <td>{category.type}</td>
            
               
               { <td className='flex items-center'>
               <Link className='font-semibold' href={`/admin/categories/${category._id}`}>
                مشاهده
               </Link>
               <button onClick={() => removeCategoy(category._id)} className='mx-3 text-red-500'>del</button>
               <Link className='font-semibold' href={`/admin/categories/edit/${category._id}`}>
                ed
               </Link>
                </td> }
              
               
          </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default CategoryListTabel
