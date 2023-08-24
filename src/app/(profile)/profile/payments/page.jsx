"use client"
import React from "react";
import PaymentTabel from "./PaymentTabel";
import Loading from "../../../common/Loading";
import { useGetUser } from "../../../hooks/useAuth";

function payments() {
   const {data,isLoading} =  useGetUser();
   const {user , payments} = data || {};

if(isLoading) return <Loading />
  return (
    <div className="mx-[24px]">
      <h1 className="font-bold text-2xl">سفارشات</h1>
      <PaymentTabel payments={payments}/>
    </div>
  );
}

export default payments;
