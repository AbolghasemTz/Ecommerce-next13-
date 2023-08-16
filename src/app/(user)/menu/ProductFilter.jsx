"use client"
import React, { useCallback, useState } from 'react'
import Checkbox from '../../common/Checkbox';
import { usePathname, useSearchParams,useRouter } from 'next/navigation';

function ProductFilter({categories}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [selectedCategories,setSelectedCategories] = useState(searchParams.get("category")?.split(",") || []);
  
    const createQueryString = useCallback(
        (name , value ) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value)
            return params.toString()
        },[searchParams]
    )
  
    console.log(searchParams.get("category")?.split(",") || []);
    const categoryHandler = (e) => {
        const value = e.target.value;
        if(selectedCategories.includes(value)){ 
            const categories =  selectedCategories.filter((c) => c !== value);
            setSelectedCategories(categories);
          
            router.push(pathname + "?" + createQueryString("category", categories));
        }else{
            setSelectedCategories([...selectedCategories, value])
            router.push(pathname + "?" + createQueryString("category",[...selectedCategories,value]))
        }
  
    }
  return (
<div className="md:col-span-1 col-span-5 px-[24px] md:px-0 space-y-4">
        {categories?.map((category) => {
          return (
            <Checkbox
              key={category._id}
              id={category._id}
              value={category.englishTitle}
              name="product-type"
              label={category.title}
              onChange={categoryHandler}
              checked={selectedCategories.includes(category.englishTitle)}
            />
          );
        })}
      </div>
  )
}

export default ProductFilter
