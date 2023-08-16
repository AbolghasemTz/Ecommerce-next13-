import React from "react";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoriesServices";
import queryString from "query-string";
import Products from "./Products";
import CategoriesSideBar from "./CategoriesSideBar";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import Image from "next/image";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import FiltersMobile from "./FiltersMobile";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <>
    <FiltersMobile categories={categories}/>

      {/* sidebar */}
      <div class="grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 mt-8 mr-4">
      <CategoriesSideBar categories={categories} /> 

        <div class="hidden md:block col-span-8 lg:col-span-9">
          <div class="bg-white px-4 flex items-center gap-x-4 text-gray-400 rounded-md">
            <div class="bg-orange-100 p-1 rounded-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <button class="py-4">محبوب ترین</button>
            <button class="py-4">پربازدید ترین</button>
            <button class="py-4">پرفروش ترین</button>
            <button class="py-4">ارزان ترین</button>
          </div>
        </div>

        <Products products={products}/>
      </div>
    </>
  );
}

export default Menu;
{
  /* <CategoriesSideBar categories={categories} /> 
<div>
 {products.map((product) => {
 return (
   <div key={product._id} className="col-span-2">
       <div class="bg-white rounded-md shadow-lg p-2">
              <div class="mb-3 bg-gray-100 rounded-xl p-2">
                <Image src="/apple.png" alt="product" width={200} height={200}/>
              </div>

            
              <div class="flex items-center justify-between w-full mb-3">
                <span class="text-slate-300 text-sm md:text-base">اپل</span>
                <div  class="flex items-center">
                  <div
                  
                    class="ring-2 ring-red-300 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-red-500 border-2"
                  >
                    <svg
                      x-show="color= 'red'"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 stroke-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div
                   
                    class="w-6 h-6 justify-center items-center rounded-full cursor-pointer bg-blue-500 -mr-1.5 border-2 border-white"
                  ></div>
                  <div
                   
                    class="w-6 h-6 justify-center items-center rounded-full cursor-pointer bg-green-500 -mr-1.5 border-2 border-white"
                  ></div>
                </div>
              </div>

              
              <div
                class="text-slate-800 text-xs font-semibold mb-3 sm:text-base"
               
              >گوشی اپل سزی 6</div>
              <div
                class="text-orange-600 font-medium text-center text-sm mb-2 sm:text-base"
               
              >200,000 تومان</div>
              <hr />
              <button
                class="w-full text-sm font-semibold text-orange-600 py-1 md:text-lg"
              >
                مشاهده و سفارش
              </button>
            </div>
   </div>
 );
})}
</div> */
}
