import Image from "next/image";
import Link from "next/link";
import React from "react";

import LikeProduct from "../products/LikeProducts";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

function DellBrand({ products }) {
  return (
    <div className="grid gap-x-2 gap-y-8 grid-cols-2 px-4 md:px-4  md:grid-cols-2 lg:grid-cols-4 sm:gap-x-4 md:gap-x-5 md:gap-y-10">
      {products
        .filter((b) => b.brand === "DELL")
        .map((product) => {
          return (
            <div
              key={product._id}
              className="bg-white rounded-md shadow-lg p-2 "
            >
              <div className="mb-3 bg-gray-100 rounded-xl p-2  ">
                <Image
                  src={product.imageLink}
                  alt="product"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
              </div>

              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-slate-300 text-sm md:text-base">
                  {product.brand}
                </span>
                <div className="flex items-center">
                  <div className="ring-2 ring-red-300 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-red-500 border-2">
                    <svg
                      x-show="color= 'red'"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 stroke-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="w-6 h-6 justify-center items-center rounded-full cursor-pointer bg-blue-500 -mr-1.5 border-2 border-white"></div>
                  <div className="w-6 h-6 justify-center items-center rounded-full cursor-pointer bg-green-500 -mr-1.5 border-2 border-white"></div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <p className="text-slate-800 text-xs font-semibold  sm:text-base">
                  {product.title}
                </p>

                <LikeProduct product={product} />
              </div>
              <div className="font-medium text-center text-sm mb-2 sm:text-base">
                <span
                  className={`line-through text-xs sm:text-sm  text-[#777777] ${
                    product.offPrice && "hidden sm:block"
                  }`}
                >
                  {toPersianNumbersWithComma(product.price)}تومان
                </span>
                <span className="text-sm sm:text-base  text-[#353535] mx-2">
                  {toPersianNumbersWithComma(product.offPrice)}تومان
                </span>
              </div>
              <hr />
              <div className="flex justify-center items-center">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full text-center text-sm font-semibold text-[#417F56] py-1 md:text-lg"
                >
                  مشاهده و سفارش
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DellBrand;
