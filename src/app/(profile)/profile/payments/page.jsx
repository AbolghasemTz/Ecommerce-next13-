"use client"
import React from "react";
import PaymentTabel from "./PaymentTabel";
import Loading from "@/src/app/common/Loading";
import { useGetUser } from "@/src/app/hooks/useAuth";

function payments() {
   const {data,isLoading} =  useGetUser();
   const {user , payments} = data || {};

if(isLoading) return <Loading />
  return (
    <div className="">
      <h1 className="font-bold text-2xl">سفارشات</h1>
      <PaymentTabel payments={payments}/>
    </div>
  );
}

export default payments;
