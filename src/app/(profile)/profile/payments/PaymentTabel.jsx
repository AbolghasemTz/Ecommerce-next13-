import React from "react";
import { userPaymentTHeads } from "../../../constant/tableHeads";
import { toLocalString } from "../../../utils/toLocalString";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";

function PaymentTabel({ payments }) {
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {userPaymentTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {payments.map((pay, index) => {
            return (
              <tr key={pay._id}>
                <td className="text-center text-[12px] px-1">{index}</td>
                <td className="truncate whitespace-nowrap text-center text-[13px] px-1">
                  {pay.invoiceNumber}
                </td>
                <td className="text-center text-[11px] px-1">
                  {pay.description}
                </td>
                <td className="text-center text-[11px] px-1">
                  {pay.cart.productDetail.map((product) => {
                    return <div key={product._id}>{product.title}</div>;
                  })}
                </td>
                <td className="text-center text-[12px] px-1">
                  {toPersianNumbersWithComma(pay.amount)}
                </td>
                <td className="text-center text-[12px] px-1">
                  {toLocalString(pay.createdAt)}
                </td>
                <td className="text-center text-[12px] px-1">
                  {pay.status === "COMPLETED" ? "موفق" : "ناموفق"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTabel;
