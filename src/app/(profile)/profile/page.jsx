"use client"
import React from 'react'
import { useGetUser } from '../../hooks/useAuth'
import { toLocalString } from '../../utils/toLocalString';
import Loading from '../../common/Loading';
import PaymentTabel from './payments/PaymentTabel';
import Link from 'next/link';

function Profile() {
  const {data,isLoading} = useGetUser();
  const {user,payments} = data || {};
  if (isLoading) return <Loading />;

  return (
    <div className='md:ml-[30px] mx-[24px] p-4 min-h-screen border border-gray-100 rounded-lg'>
      <h1><span className='font-bold'>{user?.name}</span> عزیز خوش آمدی !</h1>
      <p>
        <span className='pl-2'>تاریخ پیوستن</span>
        <span> {toLocalString(user?.createdAt)}</span>
      </p>
      <div>
      <div className='flex justify-between items-center'>
      <h2 className='mt-8 font-semibold'>اخرین سفاشات کاربر</h2>
      <Link href="/profile/payments" className='font-semibold decoration-slate-100'> مشاهده همه سفارشات</Link>
      </div>
      <PaymentTabel payments={payments.sort((a,b) => new Date(b - new Date(a))).slice(0,2)}/>
     </div>
    </div>
  )
}

export default Profile
