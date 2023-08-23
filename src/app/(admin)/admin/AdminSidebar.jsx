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
    <div className='md:h-auto px-4 border border-gray-100 rounded-lg ml-[24px] mr-[24px]'>
<ul className='text-[#353535] text-[16px] font-semibold'>
<li className='py-2 '>
    <Link href="/">صفحه اصلی</Link>
  </li>
<li className='py-2 '>
    <Link href="/admin">داشبورد </Link>
  </li>

  <li className='py-2 '>
    <Link href="/admin/users">کاربران</Link>
  </li>
  <li className='py-2 '>
    <Link href="/admin/products">محصولات</Link>
  </li>
  <li className='py-2 '>
    <Link href="/admin/categories">دسته بندی </Link>
  </li>
  <li className='py-2 '>
    <Link href="/admin/payments">سفارشات</Link>
  </li>
  <li className='py-2 '>
    <Link href="/admin/coupons">کد تخفیف</Link>
  </li>
  
 
  <li className='py-2 '>
    <button onClick={logOutHandler}>خروج از حساب کاربری</button>
  </li>
</ul>
    </div>
  )
}

export default AdminSideBar
