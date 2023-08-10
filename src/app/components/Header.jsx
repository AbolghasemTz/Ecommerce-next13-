"use client";
import React, { useState } from "react";

import styled from "../style/header/header.module.css";

import { CiShoppingCart } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";

import Link from "next/link";
import Image from "next/image";

import AuthPage from "../(user)/auth/page";


import { useGetUser } from "../hooks/useAuth";
import { loguot } from "../services/AuthServices";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useGetUser();
  const { user, cart } = data || {};
  const logoutHandler =async()=>{
    await loguot();
    document.location.href = "/"
  }
  return (
    <header className={styled.header}>
      <div className={styled.header_info}>
        <div>
          <Link href="/">
            <Image src="/svg/logo.svg" width={155} height={51} alt="Logo" />
          </Link>
        </div>
        <ul className="flex gap-7 items-center ">
          <li>
            <Link href="/" className={styled.header_Link}>
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href="/menu" className={styled.header_Link}>
              منو
            </Link>
          </li>

          <li>
            <Link href="/about" className={styled.header_Link}>
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styled.header_Link}>
              تماس با ما
            </Link>
          </li>
        </ul>
        <div className="flex items-center ">
          <Link href="/cart">
            <div className={`relative ${styled.header_icons}`}>
              <CiShoppingCart size={24} />
              {user && (
                <span className={styled.header_shoppingCart}>
                  {cart && cart.payDetail.productIds.length}
                </span>
              )}
            </div>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`relative ${styled.header_icons}`}
          >
            <PiUserLight size={24} onClick={() => setIsOpenModal(true)} />
            {user ? (
              <div>
                {isOpen && (
                  <div className={styled.dropDownUserIcon}>
                    <ul className="text-[#E5F2E9] py-2">
                      {user?.isActive && <li>سلام {user?.name}</li>}

                      {user.role === "USER" ? (
                        <li className="mt-3">
                          <Link href="/profile">پروفایل</Link>
                        </li>
                      ) : (
                        <li className="mt-3">
                          <Link href="/admin">پنل ادمین</Link>
                        </li>
                      )}
                      <li className="mt-3"><button onClick={logoutHandler}>خروج</button></li>
                    </ul>
                  </div>
                )}{" "}
              </div>
            ) : (
              <AuthPage isOpenModal={isOpenModal} onClose={setIsOpenModal} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
