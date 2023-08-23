"use client";
import React, { useState } from "react";
import styled from '../style/header/header.module.css'

import { MdOutlineClose } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";

import Link from "next/link";
import Image from "next/image";
import AuthPage from "../(user)/auth/page";

import { useGetUser } from "../hooks/useAuth";

function HeaderMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useGetUser();
  const { user, cart } = data || {};
  const logoutHandler =async()=>{
    await loguot();
    document.location.href = "/"
  }

  return (
    <>
      <header className={styled.header_mobile}>
        <div
          className={styled.header_burgerMenu}
          onClick={() => setShowMenu(true)}
        >
          <span className={`${styled.berger_menu}`}></span>
          <span className={`${styled.berger_menu}`}></span>
          <span className={`${styled.berger_menu}`}></span>
        </div>

        <div className="w-[80px] h-[80px]">
          <Image src="/image/logo.png" width={102} height={32} alt="Logo" />
        </div>

        {showMenu && (
          <div className={styled.show_menu}>
            <div className={styled.show_menuDrower}>
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className={styled.show_closeIcon}
              />
              <div className={styled.show_items}>
                <ul>
                  <li className="mt-8">
                    <Link href="/" className={styled.header_link_mobile}>
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/products" className={styled.header_link_mobile}>
                     محصولات
                    </Link>
                  </li>

                  <li className="mt-3">
                    <Link href="/about" className={styled.header_link_mobile}>
                      درباره ما
                    </Link>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center">
          <Link href="/cart">
            <div className={`relative ${styled.header_mobileIcons}`}>
              <CiShoppingCart size={16} />

              {user && (
                <span className={styled.header_mobileShoppingCart}>
                  {cart && cart.payDetail.productIds.length}
                </span>
              )}
            </div>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={styled.header_mobileIcons}
          >
            <PiUserLight size={16} onClick={() => setIsOpenModal(true)} />
            {user ? (
              <div>
                {isOpen && (
                  <div className={`${styled.mobile_dropDownUserIcon}`}>
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
      </header>
    </>
  );
}

export default HeaderMobile;
