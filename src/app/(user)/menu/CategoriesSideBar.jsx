"use client";
import React from "react";

import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";

function CategoriesSideBar({ categories }) {
  return (
    <div className="border ml-[24px] rounded-md p-4 shadow-md">
      <p className="font-bold mb-4 border-b pb-2 ">دسته بندی ها</p>
      <ProductFilter categories={categories} />
      <p className="font-bold mb-4 border-b pt-4 pb-2">مرتب سازی</p>
      <ProductSort />
    </div>
  );
}

export default CategoriesSideBar;
