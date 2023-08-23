"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Checkbox from "../../common/Checkbox";

function ProductsFilter({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );
  // console.log(searchParams.getAll("category")[0].split(","));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
    }
  };
  return (
    <div className="space-y-3 py-2" >
    
     
        {categories.map((category) => {
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
  );
}
export default ProductsFilter;




