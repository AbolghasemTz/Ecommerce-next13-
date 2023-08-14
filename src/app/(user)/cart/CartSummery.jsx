import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Loading from "../../common/Loading";
import { ceratedPayment } from "../../services/paymentService";

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
    <div className="col-span-1">
      <div className="border p-2 rounded-xl">
        <p className="mb-8">اطلاعات پرداخت</p>
        <div className="mb-4 flex justify-between items-center">
          <span>جمع کل</span>
          <span>{totalGrossPrice}</span>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <span> تخفیف</span>
          <span>{totalOffAmount}</span>
        </div>
        <div className="mb-5 flex justify-between items-center">
          <span className="font-bold"> مبلغ قابل پرداخت</span>
          <span className="font-bold">{totalPrice}</span>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <button
            onClick={createPaymentHandler}
            className="btn p-2 w-full"
          >
            ثبت سفارش
          </button>
        )}
      </div>
    </div>
  );
}

export default CartSummery;
