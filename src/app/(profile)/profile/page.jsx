"use client"
import React from 'react'
import { useGetUser } from '../../hooks/useAuth'
import { toLocalString } from '@/utils/toLocalString';
import Loading from '../../common/Loading';

function Profile() {
  const {data,isLoading} = useGetUser();
  const {user} = data || {};
  if (isLoading) return <Loading />;

  return (
    <div className='md:ml-[30px] mx-[24px] p-4 min-h-screen border border-gray-100 rounded-lg'>
      <h1><span className='font-bold'>{user?.name}</span> عزیز خوش آمدی !</h1>
      <p>
        <span className='pl-2'>تاریخ پیوستن</span>
        <span> {toLocalString(user?.createdAt)}</span>
      </p>
    </div>
  )
}

export default Profile
