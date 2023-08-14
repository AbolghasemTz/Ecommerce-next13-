"use client"
import React from 'react'
import Link from 'next/link'
import { loguot } from '../../services/AuthServices';

function AdminSideBar() {
  const logOutHandler = async() => {
 await loguot();
//  localStorage.removeItem("userInfo");
//  localStorage.removeItem("cartItems");
//  localStorage.removeItem("token");
document.location.href = "/"
  }
  return (
    <div className='flex flex-cols space-y-8 '>
<ul>
<li className='py-2 font-semibold'>
    <Link href="/">صفحه اصلی</Link>
  </li>
<li className='py-2 font-semibold'>
    <Link href="/admin">داشبورد </Link>
  </li>

  <li className='py-2 font-semibold'>
    <Link href="/admin/users">کاربران</Link>
  </li>
  <li className='py-2 font-semibold'>
    <Link href="/admin/products">محصولات</Link>
  </li>
  <li className='py-2 font-semibold'>
    <Link href="/admin/categories">دسته بندی </Link>
  </li>
  <li className='py-2 font-semibold'>
    <Link href="/admin/payments">سفارشات</Link>
  </li>
  <li className='py-2 font-semibold'>
    <Link href="/admin/coupons">کد تخفیف</Link>
  </li>
  
 
  <li className='py-2 font-semibold'>
    <button onClick={logOutHandler}>خروج از حساب کاربری</button>
  </li>
</ul>
    </div>
  )
}

export default AdminSideBar
