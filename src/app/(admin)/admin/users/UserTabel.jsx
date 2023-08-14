
import React from 'react'
import Link from 'next/link'
import { userListTabelHeads } from '@/src/app/constant/tableHeads';
import { toLocalString } from '@/utils/toLocalString';

function UserTabel({users}) {
    console.log(users);
  return (
    <div className='shadow-sm overflow-auto my-8'>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
            <tr>
                {userListTabelHeads.map((item) => {
                    return (
                        <th className="whitespace-nowrap" key={item.id}>
                            {item.label}
                        </th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
          {users.map((user,index) => {
            return <tr key={user._id}>
                 <td>{index} =</td>
                 <td className="truncate whitespace-nowrap">{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.phoneNumber} {user.isVerifiedPhoneNumber && <h6 className='text-green-600'>verify</h6>}</td>
                 <td>{user.Products?.map((product,index) => {
                  return <div key={index}>{product.title}</div>
                 })}</td>
                 <td>{toLocalString(user.createdAt)}</td>
                 <td><Link href={`/admin/users/${user._id}`}>مشاهده کاربر</Link></td>
                
                 
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTabel
