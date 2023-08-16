"use client";
import React, { useState } from "react";

import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import { IoIosArrowDown } from "react-icons/io";

function CategoriesSideBar({ categories }) {
  const [isOpenBrand, setIsOpneBrand] = useState(false);
  return (
    <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2 mr-4">
          <div className="bg-white p-5 rounded-lg">
            <div className="mb-7">
              <div className="text-[#353535] font-bold text-xl mb-5">
               مرتب سازی
              </div>
             <ProductSort />
            </div>

            <div className="">
              <div className="text-[#353535] font-bold text-xl mb-5">فیلتر ها</div>
              <div onClick={() => setIsOpneBrand(!isOpenBrand)} className="cursor-pointer">
                <div className="mb-4 flex justify-between items-center w-full py-2">
                  <div className="flex items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="mr-3">برند محصول</span>
                  </div>
                  <div className="">
                   <IoIosArrowDown size={19}/>
                  </div>
                </div>
                {
                  isOpenBrand &&  <ProductFilter categories={categories} />
                }
             
              </div>

              
            </div>
          </div>
        </div>
  );
}

export default CategoriesSideBar;
