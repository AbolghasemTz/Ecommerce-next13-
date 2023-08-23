import React from "react";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoriesServices";
import queryString from "query-string";
import Products from "./Products";
import CategoriesSideBar from "./CategoriesSideBar";

import FiltersMobile from "./FiltersMobile";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <>
      <FiltersMobile categories={categories} />

      {/* sidebar */}
      <div className="grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 mt-8 ">
        <CategoriesSideBar categories={categories} />

        <div className="hidden md:block col-span-12 lg:col-span-9">
          <div className="bg-white mx-4 px-4 flex items-center gap-x-4 text-gray-400 rounded-md">
            <div className="bg-orange-100 p-1 rounded-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-orange-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <button className="py-4">محبوب ترین</button>
            <button className="py-4">پربازدید ترین</button>
            <button className="py-4">پرفروش ترین</button>
            <button className="py-4">ارزان ترین</button>
          </div>
        </div>

        <Products products={products} />
      </div>
    </>
  );
}

export default Menu;

