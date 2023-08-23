import React from "react";

import Link from "next/link";
import HpBrand from "./HpBrand";
import DellBrand from "./DellBrand";
import AppleBrand from "./AppleBrand";
export const daynamic = "force-dynamic"; //uq to cache store ssr

function HomeProduct({ products }) {
  console.log(products);
  return (
    <div className=" mb-9">
      <div className="bg-white">
        <div className="flex justify-between items-center mb-9 px-6 text-slate-900  py-4">
          <h3 className="text-xl font-semibold ">
            لپ تاپ های اچ پی
          </h3>
          <Link href="/products" className="text-sm">
            مشاهده همه
          </Link>
        </div>
        <div className="">
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:px-4 pb-6 md:py-6">
            <HpBrand products={products} />
          </div>
        </div>
      </div>
      <div className="my-9 bg-[#315F41]">
        <div className="flex justify-between items-center mb-9 text-white px-6  py-4">
          <h3 className="text-xl font-semibold  ">
            لپ تاپ های دل
          </h3>
          <Link href="/products" className="text-sm">
            مشاهده همه
          </Link>
        </div>
        <div className=" ">
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:px-4 pb-6 md:py-6">
            <DellBrand products={products} />
          </div>
        </div>
      </div>
      <div className="my-9 bg-white">
        <div className="flex justify-between items-center mb-9 px-6 text-slate-900  py-4">
          <h3 className="text-xl font-semibold  ">
            لپ تاپ های اپل
          </h3>
          <Link href="/products" className="text-sm">
            مشاهده همه
          </Link>
        </div>
        <div className=" ">
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:px-4 pb-6 md:py-6">
            <AppleBrand products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
