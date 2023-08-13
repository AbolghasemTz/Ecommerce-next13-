import React from "react";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoriesServices";
import queryString from 'query-string';
import Products from "./Products";
import CategoriesSideBar from "./CategoriesSideBar";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({searchParams}) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <div>
      <div className="text-center">منو غذایی</div>

      <div className="w-full lg:px-[108px] md:px-[55px] py-[32px]">
        {/* category */}
        <div className="grid grid-cols-5 ">
          <CategoriesSideBar categories={categories} />

          {/* products */}
          <div className="md:col-span-4 col-span-5 px-[24px] md:px-0 grid grid-cols-6 gap-4">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="md:col-span-2 h-fit col-span-6 border rounded-xl shadow-md flex"
                >
                  <Products product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
