import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ceratedPayment } from "../../services/paymentService";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumber";

function CartSummery({ payDetail }) {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: ceratedPayment,
  });
  const queryClient = useQueryClient();

  const createPaymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
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
    <div class=" md:w-1/3 md:mx-0 px-4 mt-6 lg:mt-0 w-full lg:max-w-sm ">
    <div class="bg-white mb-5 px-4 py-5 rounded-lg w-full text-slate-800 font-medium">
      <div class="flex items-center justify-between mb-5">
        <span class="text-lg">مجموع قیمت :</span>
        <span class="text-orange-500">{toPersianNumbersWithComma(totalGrossPrice)}تومان</span>
      </div>
      <div class="flex items-center justify-between mb-5">
        <span class="font-light text-lg">کد تخفیف:</span>
        <div class="flex items-stretch justify-between rounded-xl overflow-hidden bg-gray-200">
          <input
            type="text"
            dir="ltr"
            class="border-0 w-full max-w-[150px] bg-transparent p-2 text-gray-700 outline-none focus:outline-none"
            placeholder="AS-DSE"
          />
          <button class="border-0 bg-[#417F56] px-4 text-white outline-none">
            تایید
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mb-11">
        <span class="text-lg">تخفیف:</span>
        <span class="text-orange-500">{toPersianNumbersWithComma(totalOffAmount)}تومان</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-lg">قیمت نهایی:</span>
        <span class="text-orange-500">{toPersianNumbersWithComma(totalPrice)}تومان</span>
      </div>
    </div>
    <div>
      <button  onClick={createPaymentHandler} class="w-full mb-4 py-3 text-white bg-[#417F56]  rounded-md text-lg">
      ثبت سفارش
      </button>

    </div>
  </div>
  );
}

export default CartSummery;
