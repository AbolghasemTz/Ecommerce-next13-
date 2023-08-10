"use client";
import React, { useEffect, useState } from "react";
import TextField from "@/src/app/common/TextField";
import { useGetUser } from "@/src/app/hooks/useAuth";
import { includeObj } from "@/utils/objectUtils";
import Loading from "@/src/app/common/Loading";

function MePage() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  
  const includesKey = ["name", "email", "phoneNumber", "biography"];
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
      if(user) setFormData(includeObj(user,includesKey))
    },[user])

if (isLoading) return <Loading />;
  return (
    <div className="ml-4 p-4 min-h-screen border border-gray-100 rounded-lg">
      <div className="border-b border-gray-100 pb-[16px]">
        <h1>پروفایل من</h1>
        <div>
          <form>
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
            <button type="submit" className="btn md:w-[344px] h-[40px] w-[90vw]">تایید</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MePage;
