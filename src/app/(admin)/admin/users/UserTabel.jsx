
import React from 'react'
import Link from 'next/link'
import { GrView } from 'react-icons/gr';
import { userListTabelHeads } from '../../../constant/tableHeads';
import { toLocalString } from '../../../utils/toLocalString';

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
          {users?.map((user,index) => {
            return <tr key={user._id}>
                 <td className='text-center'>{index}</td>
                 <td className="truncate whitespace-nowrap text-center">{user.name}</td>
                 <td className='text-center'>{user.email}</td>
                 <td className='text-center'>{user.phoneNumber} {user.isVerifiedPhoneNumber && <h6 className='text-green-600'>verify</h6>}</td>
                 <td className='text-center'>{user.Products?.map((product,index) => {
                  return <div key={index}>{product.title}</div>
                 })}</td>
                 <td className='text-center'>{toLocalString(user.createdAt)}</td>
                 <td className='flex justify-center'><Link href={`/admin/users/${user._id}`}><GrView size={18} /></Link></td>
                
                 
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTabel
