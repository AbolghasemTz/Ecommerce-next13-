"use client";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import Link from "next/link";
import { useGetUser } from "../../hooks/useAuth";
import { loguot } from "../../services/AuthServices";

function sidebar() {
  const { data } = useGetUser();
  const { user } = data || {};
  const logoutHandler = async () => {
    await loguot();
    document.location.href = "/";
  };
  return (
    <div className=" md:h-[342px] px-4 border border-gray-100 rounded-lg ml-[24px] mr-[24px]">
      <div className="flex justify-start items-center py-[16px] border-b">
        <div>
          <Image
            src="/user.jpg"
            alt="user"
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px] "
          />
        </div>
        <div className="pr-[25px]">
          <p className="text-[#353535] text-[16px]">{user?.name}</p>
          <p className="text-[#717171] text-[12px]">{user?.phoneNumber}</p>
        </div>
      </div>
      <div>
        <ul className="text-[#353535] text-[14px] space-y-[12px] mt-[16px]">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/profile">داشبورد</Link>
          </li>
          <li>
            <Link href="/profile/me">اطلاعت کاربری</Link>
          </li>
          <li className="">
            <Link href="/profile/payments">سفارشات</Link>
          </li>
          <li>
            <button
              onClick={logoutHandler}
              className="text-[#C30000] md:pb-0 pb-[16px]"
            >
              خروج
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
