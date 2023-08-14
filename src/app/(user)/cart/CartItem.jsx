"use client";

import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { useAddToCart, useDecrementFromCart } from "../../hooks/useAddToCart";
import { toPersianNumbers } from "@/utils/toPersianNumber";

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
    <div className="border rounded-xl p-4 flex justify-between">
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
    </div>
  );
}

export default CartItem;
