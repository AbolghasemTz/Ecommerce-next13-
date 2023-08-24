"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/AuthServices'
import TextField from '../../common/TextField'

function page() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const router = useRouter()
  const {data,mutateAsync} = useMutation({mutationFn: completeProfile})
const {user} = data || {}
console.log(user);
  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const {message} = await mutateAsync({ name, email });
      toast.success(message);
    
      router.push("/")
      
    } catch (error) {
      // console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className="flex justify-center min-h-screen mt-8">
      <div className="md:w-full sm:max-w-sm w-[90vw]">
        <form className='space-y-8' onSubmit={submitHandler}>
          <TextField name="name" label="نام و نام خانوادگی" value={user?.name} onChange={(e) => setName(e.target.value)}/>
          <TextField name="email" label="ایمیل " value={user?.email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit" className="btn md:w-[344px] h-[40px] w-[90vw]">
              تایید
            </button>
        </form>
      </div>
    </div>
  )
}

export default page
