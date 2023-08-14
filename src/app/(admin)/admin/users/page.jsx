"use client"
import React from 'react'
import UserTabel from './UserTabel';
import { useGetAllUser } from '@/src/app/hooks/useAuth';
import Loading from '@/src/app/common/Loading';

function page() {
   const {isLoading , data}= useGetAllUser();
   const {users} = data || {};
   if(isLoading) return <Loading />
  return (
    <div>
     <h1>اطلاعات کاربران</h1>
     <UserTabel users={users}/>
    </div>
  )
}

export default page
