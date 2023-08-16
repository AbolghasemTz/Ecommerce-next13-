"use client";
import React, { useState } from "react";
import ProductSort from "./ProductSort";
import ProductFilter from "./ProductFilter";

function FiltersMobile({ categories }) {
  const [isOpenSort, setIsOpneSort] = useState(false);
  const [isOpenBrand, setIsOpneBrand] = useState(false);
  return (
    <div className="md:hidden  flex justify-between items-center px-4 gap-x-4 mt-4 mb-9">
      <div
        onClick={() => setIsOpneSort(!isOpenSort)}
        className="bg-white rounded  py-2 pr-4 flex items-center justify-start w-1/2 relative"
      >
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-orange-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <div classNameName="">
          <span className="text-sm font-medium text-slate-800 mr-3 ">
           مرتب سازی
          </span>
        </div>
        {isOpenSort && (
          <div classNameName="absolute top-12 left-0 bg-[#E5F2E9]  py-2 text-xs w-full shadow-md">
            <ProductSort />
          </div>
        )}
      </div>
      <div
        onClick={() => setIsOpneBrand(!isOpenBrand)}
        className="bg-white rounded py-2 pr-4 flex items-center justify-start w-1/2 relative"
      >
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-orange-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </div>
        <div classNameName="">
          <span className="text-sm font-medium text-slate-800 mr-3">فیلتر ها</span>
        </div>
        {isOpenBrand && (
          <div classNameName="absolute top-12 left-0 bg-[#E5F2E9]  py-2 text-xs w-full shadow-md">
            <ProductFilter categories={categories} />
          </div>
        )}
      </div>
    </div>
  );
}

export default FiltersMobile;
