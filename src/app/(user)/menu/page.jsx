import React from "react";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoriesServices";
import queryString from "query-string";
import Products from "./Products";
import CategoriesSideBar from "./CategoriesSideBar";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <div className="">
     <CategoriesSideBar categories={categories} /> 
  <div>
   {products.map((product) => {
   return (
     <div key={product._id} className="col-span-2">
       <Products product={product} />
     </div>
   );
 })}
  </div>
  </div>
  );
}

export default Menu;
