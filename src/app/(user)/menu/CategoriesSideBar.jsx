"use client";
import React from "react";

import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import { IoIosArrowDown } from "react-icons/io";

function CategoriesSideBar({ categories }) {
 
  return (
    <div class="hidden md:block col-span-4 lg:col-span-3 row-span-2">
          <div class="bg-white p-5 rounded-lg">
            <div class="mb-7">
              <div class="text-[#353535] font-bold text-xl mb-5">
               مرتب سازی
              </div>
             <ProductSort />
            </div>

            <div class="">
              <div class="text-[#353535] font-bold text-xl mb-5">فیلتر ها</div>
              <div x-data="{isOpenBrand:true }" class="">
                <div class="mb-4 flex justify-between items-center w-full py-2">
                  <div class="flex items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span class="mr-3">برند محصول</span>
                  </div>
                  <div class="">
                   <IoIosArrowDown size={19}/>
                  </div>
                </div>

              <ProductFilter categories={categories} />
              </div>

              
            </div>
          </div>
        </div>
  );
}

export default CategoriesSideBar;
