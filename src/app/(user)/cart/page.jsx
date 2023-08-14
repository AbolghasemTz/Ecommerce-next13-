"use client"
import Link from 'next/link';
import React from 'react'
import CartItem from './CartItem';
import CartSummery from './CartSummery';
import { useGetUser } from '../../hooks/useAuth';
import Loading from '../../common/Loading';

function page() {
    const {data , isLoading} = useGetUser();
    const {user,cart} = data || {};
    if(isLoading) return <Loading />
  if(!user || !data) 
  return(
    <div className='container lg:max-w-screen-lg'>
        <p className='font-bold mb-4'>برای مشاهده سبد خرید لطفا اقدام کنید</p>
        <Link href="/auth" className='text-lg font-bold text-primary-900'>رفتن به صفحه لاگین؟</Link>
    </div>
  )

  if(!user.cart?.products || user.cart?.products.length === 0) return <div><p>سبد خرید خالی است</p>
          <Link href="/menu" className='text-lg font-bold text-primary-900'>رفتن به صفحه محصولات</Link>

  </div>

  return (
    <div className='grid grid-cols-4 gap-4'>
        <div className='space-y-5 col-span-3'>{cart && cart.productDetail?.map((item) =>{
    return <CartItem key={item._id} cartItem={item}/>
  })}</div>
  <CartSummery payDetail={cart.payDetail}/>
    </div>
  )
}

export default page
