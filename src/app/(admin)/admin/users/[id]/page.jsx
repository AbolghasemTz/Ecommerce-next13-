"use client"
import React from 'react';
import { useParams } from 'next/navigation'

function page() {
    const {id} = useParams();
    console.log(id,"omid");
  return (
    <div>
      
    </div>
  )
}

export default page
