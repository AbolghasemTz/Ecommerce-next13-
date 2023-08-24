"use client";
import React, { useEffect, useState } from "react";
import TextField from "../../../common/TextField";
import { useGetUser } from "../../../hooks/useAuth";
import { includeObj } from "../../../utils/objectUtils";
import Loading from "../../../common/Loading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../../services/AuthServices";
import { toast } from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient()
 const {mutateAsync, isLoading:isUpdating} = useMutation({mutationFn:updateProfile})
  const { user } = data || {};
  const [formData, setFormData] = useState({});
  
  const includesKey = ["name", "email", "phoneNumber", "biography"];
  
  useEffect(() => {
      if(user) setFormData(includeObj(user,includesKey))
    },[user])
const submitHandler = async (e) =>{
e.preventDefault()
try {
    const {message} = await mutateAsync(formData);
    queryClient.invalidateQueries({queryKey:["get-user"]})
    toast.success(message)
} catch (error) {
    toast.error(error?.response?.data?.message)
}
}
if (isLoading) return <Loading />;
if (isUpdating) return <Loading />;
  return (
    <div className="ml-4 p-4 min-h-screen border border-gray-100 rounded-lg">
      <div className="border-b border-gray-100 pb-[16px]">
        <h1>پروفایل من</h1>
        <div>
          <form onSubmit={submitHandler}>
            {Object.keys(includeObj(user, includesKey)).map((key) => {
              return (
                <TextField
                  label={key}
                  name={key}
                  key={key}
                  value={formData[key] || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              );
            })}
            <button type="submit" className="btn md:w-[344px] h-[40px] w-[100%]">تایید</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MePage;
