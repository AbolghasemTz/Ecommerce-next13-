"use client";
import React, { useState } from "react";
import ProductSort from "./ProductSort";
import ProductFilter from "./ProductFilter";

import { BsFilter } from "react-icons/bs";
import { PiSortAscendingLight } from "react-icons/pi";
function FiltersMobile({ categories }) {
  const [isOpenSort, setIsOpneSort] = useState(false);
  const [isOpenBrand, setIsOpneBrand] = useState(false);
  return (
    <div className="md:hidden flex justify-between items-center px-4 gap-x-4 mt-4 mb-9">
      {/* filter */}
      <div className="w-1/2 relative ">
        <div onClick={() => setIsOpneBrand(!isOpenBrand)} className="flex justify-start items-center bg-white px-4 py-2 rounded-md">
          <BsFilter size={18} color="#064e3b" />
          <span className="text-sm mr-1">فیلتر ها</span>
        </div>
        <div className="absolute left-0 text-sm  bg-[#E5F2E9] shadow-md w-full mt-2 rounded-md space-y-2 h-auto">
          {isOpenBrand && (
            <div classNameName="  py-2 text-xs w-full shadow-md">
              <ProductFilter categories={categories} />
            </div>
          )}
        </div>
      </div>

      {/* sort */}
      <div className="w-1/2 relative">
        <div onClick={() => setIsOpneSort(!isOpenSort)} className="flex justify-start items-center bg-white px-4 py-2 rounded-md">
          <PiSortAscendingLight size={18} color="#064e3b" />
          <span className="text-sm mr-1">مرتب سازی</span>
        </div>
        <div className="absolute left-0 text-sm  bg-[#E5F2E9] shadow-md w-full mt-2 rounded-md space-y-2  h-auto">
          {isOpenSort && (
            <div classNameName="">
              <ProductSort />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FiltersMobile;
// {isOpenSort && (
//   <div classNameName="absolute top-12 left-0 bg-[#E5F2E9]  py-2 text-xs w-full shadow-md">
//     <ProductSort />
//   </div>
// )}

// {isOpenBrand && (
//   <div classNameName="absolute top-12 left-0 bg-[#E5F2E9]  py-2 text-xs w-full shadow-md">
//     <ProductFilter categories={categories} />
//   </div>
// )}
