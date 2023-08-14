import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
function Products({ product }) {
  return (
    <div className="w-[100%] rounded overflow-hidden shadow-md">
      <Image
        src="/food.jpg"
        width={500}
        height={500}
        alt="food"
        className="w-[100%] h-[150px] object-fill"
      />
      <div className="flex flex-col justify-between">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-[16px]">{product.title}</p>
            <AiFillHeart size={22} color="#ED2E2E" />
          </div>
          <p className="text-gray-700 text-base ">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block line-through px-3 py-1 text-[#777777] font-semibold text-[12px] mr-2 mb-2">
            {product.price}
          </span>
          <span className="inline-block  px-3 py-1 text-[#353535] font-semibold text-[14px] mr-2 mb-2">
            {product.offPrice}
          </span>
          <span className="inline-block bg-gray-[#FFF2F2] rounded-full px-3 py-1 text-sm font-semibold text-[#ED2E2E] mr-2 mb-2">
            {product.discount}%
          </span>
          <div className="">
            <Link href={`/menu/${product.slug}`}>مشاهده محصول</Link>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
