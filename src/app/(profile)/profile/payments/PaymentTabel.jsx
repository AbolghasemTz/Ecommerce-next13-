import { userPaymentTHeads } from '@/src/app/constant/tableHeads'
import { toLocalString } from '@/utils/toLocalString'
import React from 'react'

function PaymentTabel({payments}) {
  return (
    <div className='shadow-sm overflow-auto my-8'>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
            <tr>
                {userPaymentTHeads.map((item) => {
                    return (
                        <th className="whitespace-nowrap" key={item.id}>
                            {item.label}
                        </th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
          {payments.map((pay,index) => {
            return <tr key={pay._id}>
                 <td>{index} =</td>
                 <td className="truncate whitespace-nowrap">{pay.invoiceNumber}</td>
                 <td>{pay.description}</td>
                 <td>{pay.cart.productDetail.map((product) => {
                  return <div key={product._id}>{product.title}</div>
                 })}</td>
                 <td>{pay.amount}</td>
                 <td>{toLocalString(pay.createdAt)}</td>
                 <td>{pay.status === "COMPLETED" ? "موفق" : "ناموفق"}</td>
                 
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PaymentTabel
