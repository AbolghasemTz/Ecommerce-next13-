import React from "react";
import Image from "next/image";

// icons
import {
  BsTelephone,
  BsInstagram,
  BsWhatsapp,
  BsFacebook,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { toPersianNumbers } from "../utils/toPersianNumber";

function Footer() {
  return (
    <footer className="bg-[#111111] pb-4 px-9">
      {/* top footer */}
      <div className="grid grid-cols-12 md:gap-x-8 gay-y-6 py-8">
        <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
          <h3 className="font-bold text-2xl tracking-wider">فروشگاه </h3>
          <p className="md:text-base text-sm py-8">
            مهم ترین هدف ما در فروشگاه  امید، جلب و حفظ رضایت شما دوستانی
            است که سرمایه های ارزشمند این فروشگاه محسوب می شوید. در برابر قیمت
            های متغیر و گاه غیرمنصفانه بازار، ما در کنار شما هستیم و همواره در
            تلاشیم تا کالاهای با کیفیت را با گارانتی معتبر و به نازل ترین قیمت
            در دسترس شما عزیزان قرار دهیم. در hldn آی تی به معنای واقعی کلمه،
            همیشه حق با مشتری است.
          </p>
          <div className=" flex items-center justify-around py-2 bg-[#292929] rounded-sm">
            <div>
              <p>تماس با ما</p>
              <p className="font-bold tracking-wider">
                {toPersianNumbers("09354947002")}
              </p>
            </div>
            <div className="p-3 bg-[#065f46] rounded-sm">
              <BsTelephone className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
          <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
            لینک های مفید
          </h3>
          <ul className="py-8">
            <li className="hover:text-[#065f46] duration-200 ease-out cursor-pointer">
              صفحه محصولات
            </li>
            <li className="hover:text-[#065f46] duration-200 ease-out pt-4 cursor-pointer">
              قوانین و مقررات
            </li>
            <li className="hover:text-[#065f46] duration-200 ease-out pt-4 cursor-pointer">
              درباره ما
            </li>
            <li className="hover:text-[#065f46] duration-200 ease-out pt-4 cursor-pointer">
              تماس با ما
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
          <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
            مخاطب
          </h3>
          <div className="py-6">
            <Image
              src="/location.png"
              alt="Location"
              width={250}
              height={250}
            />
          </div>
          <div className="flex items-center mt-8">
            <GoLocation className="text-[#065f46] text-2xl mr-2" />
            <p>IRAN, Gorgan </p>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white">
          <h3 className="font-bold tracking-wider text-2xl md:mt-0 mt-6">
            ساعت باز بودن فروشگاه
          </h3>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p>شنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>یک شنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>دوشنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>سه شنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>چهار شنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>پنج شنبه</p>
              <p>صبح{toPersianNumbers("9 - 21")} عصر</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p> تعطیلات رسمی</p>
              <p>بسته</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="grid grid-cols-12 md:gap-x-8 gay-y-6 border-t pt-4">
        <div className="md:col-span-6 col-span-12 text-white ">
          <div className="flex md:justify-start justify-center md:mt-0 mt-3">
            <h3 className="text-2xl mt-2 md:mr-3">
              ساخته شده توسط ابولقاسم تازیکی
            </h3>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 text-white ">
          <ul className="flex md:justify-end justify-center items-center gap-x-8">
            <li className="p-4">
              <BsInstagram className="text-2xl cursor-pointer hover:text-[#065f46] duration-200" />
            </li>
            <li className="p-4">
              <BsFacebook className="text-2xl cursor-pointer hover:text-[#065f46] duration-200" />
            </li>
            <li className="p-4">
              <BsWhatsapp className="text-2xl cursor-pointer hover:text-[#065f46] duration-200" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
