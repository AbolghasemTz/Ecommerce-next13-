"use client";

import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { useAddToCart, useDecrementFromCart } from "../../hooks/useAddToCart";
import Image from "next/image";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber";
function CartItem({ cartItem }) {
  const { mutateAsync: addToCartAysnc } = useAddToCart();
  const { mutateAsync: decFromCart } = useDecrementFromCart();
  const queryClient = useQueryClient();
  const addToCartHandler = async () => {
    try {
      const { message } = await addToCartAysnc(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: "get-user" });
      quer;
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  const decrementHandler = async () => {
    try {
      const { message } = await decFromCart(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: "get-user" });
      quer;
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div class="bg-white rounded-lg  p-3 flex items-stretch shadow-lg justify-between">
      <div class="w-16 md:w-24 h-auto">
        <Image
          class="w-full h-auto"
          src={cartItem.imageLink}
          alt="product"
          width={200}
          height={200}
        />
      </div>
      <div class="flex flex-col justify-between text-xs md:text-xl flex-1">
        <span class="font-bold text-slate-800">{cartItem.title}</span>
        <span class="text-orange-600 font-medium ">
          {toPersianNumbersWithComma(cartItem.price)} تومان
        </span>
      </div>
      <div class="flex flex-col justify-between items-end">
        <span></span>
        <div class="flex items-center gap-x-1 md:gap-x-3">
          <button
            onClick={addToCartHandler}
            class="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 w-6 h-6 md:w-7 md:h-7"
          >
            <BsPlusLg size={18} />
          </button>
          <span class="flex items-center justify-center border border-orange-500 rounded w-3 h-5 md:w-6 md:h-7 text-xs md:text-base">
            {toPersianNumbers(cartItem.quantity)}
          </span>

          <button
            onClick={decrementHandler}
            class=""
          >
            {cartItem.quantity === 1 ? (
              <span className="bg-rose-100  rounded-full flex cursor-pointer items-center justify-center  w-6 h-6 md:w-7 md:h-7">
                <BsTrash size={17} color="#f43f5e" />
              </span>
            ) : (
              <span class="bg-orange-200  rounded-full flex cursor-pointer items-center justify-center  w-6 h-6 md:w-7 md:h-7">
                <AiOutlineMinus size={18} />{" "}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
{
  /* <div className="border rounded-xl p-4 flex justify-between">
<span>{cartItem.title}</span>
<div className="flex items-center justify-center gap-x-8">
  <div className="border-l-2 pl-4">
    <div className="flex-1">
      قیمت :
      <span
        className={`${
          cartItem.discount ? "line-throgh text-gray-500" : "font-bold"
        }`}
      >
        {toPersianNumbers(cartItem.price)}
      </span>
    </div>
    {!!cartItem.discount && (
      <div className="flex items-center gap-x-2 mt-2">
        <p className="font-bold">{toPersianNumbers(cartItem.offPrice)}</p>
        <div className="bg-rose-500 px-2 py-0.5 rounded-lg text-white text-sm">
          {cartItem.discount}%
        </div>
      </div>
    )}
  </div>
  <span className="border-l-2 pl-4">
    تعداد :{toPersianNumbers(cartItem.quantity)}
  </span>
  <div className="flex gap-x-3">
    <button
      onClick={addToCartHandler}
      className="bg-blue-600 text-white rounded p-1"
    >
      +
    </button>
    <button onClick={decrementHandler} className=" border rounded p-1">
      -
    </button>
  </div>
</div>
</div> */
}
