import React from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumber";

function ContentInfo({ product }) {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10">
      <div className="flex flex-col xl:flex-row md:bg-white rounded-lg md:p-4">
        <div className="px-4 md:p-0 flex flex-col items-center gap-y-9 md:flex-auto bg-blue- lg:flex-row md:justify-start md:items-start">
          <div className="w-4/5 max-w-[250px] xl:max-w-xs">
            <Image
              className="w-full h-auto"
              src={product.imageLink}
              alt="product"
              width={200}
              height={200}
            />
            <div className="hidden md:flex items-center justify-between gap-x-4 px-2 mt-2">
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide1.jpg"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide2.webp"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="border rounded-lg p-2 border-gray-400">
                <Image
                  className="w-full h-auto"
                  src="/slide1.jpg"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto md:mr-8">
            <div className="mb-8 text-center md:text-right">
              <h1 className="text-slate-800 font-bold text-lg mb-1 md:mb-2 md:text-2xl">
                {product.title}
              </h1>
              <h2 className="font-thin text-gray-500 md:text-lg">
                {product.brand}
              </h2>
            </div>
            <hr className="hidden md:block mb-8" />
            <div className="flex items-center justify-evenly w-full mb-6 md:justify-start">
              <span className="text-slate-800 md:!text-xl">انتخاب رنگ :</span>
              <div className="flex items-center md:mr-4">
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:w-6 sm:h-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-blue-400 border-2 border-white -mr-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:w-6 sm:h-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-green-400 border-2 border-white -mr-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:w-6 sm:h-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-slate-800 flex flex-wrap gap-x-2 gap-y-3 text-xs md:hidden mb-6">
              <div className="flex items-center flex-auto">
                <div className="flex items-center">
                  <span>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path
                        d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00008 14.916C6.02591 14.916 5.54175 15.4002 5.54175 16.3743V17.8327H8.45841V16.3743C8.45841 15.4002 7.97425 14.916 7.00008 14.916Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="mr-1 font-medium">فروشنده : </span>
                </div>
                <span className="font-light mr-1">دیجی تایز</span>
              </div>
              <div className="flex items-center flex-auto">
                <div className="flex items-center">
                  <span>
                    <svg
                      width="21"
                      height="19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                      <path
                        d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z"
                        stroke="#222F5D"
                        stroke-width="1.063"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="mr-1 font-medium">گارانتی : </span>
                </div>
                <span className="font-light mr-1">18 ماه زرین خدمت</span>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center">
                  <span className="mr-1 font-medium">ارسال توسط : </span>
                </div>
                <span className="font-light mr-2">انبار تهران</span>
              </div>
            </div>

            <div className="text-slate-700 mb-20 sm:mb-5 font-bold bg-white p-4 rounded-lg md:p-0 md:bg-none">
              <h2 className="text-base lg:text-xl mb-5">ویژگی های کالا</h2>
              <ul className="list-disc flex flex-col gap-y-2 list-inside">
                <li className="flex flex-col md:items-center items-start gap-y-2 lg:flex-row lg:gap-x-2">
                  <span className="font-semibold text-slate-600 text-sm xl:text-lg ">
                    توضیحات:
                  </span>
                  <span className="text-sm font-medium">
                    {product.description}
                  </span>
                </li>
                <li className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                  <p className="font-light text-slate-600">
                    قیمت محصول :
                    <span
                      className={`text-base font-medium mr-2 ${
                        product.discount ? "line-through" : "font-bold"
                      }`}
                    >
                      {toPersianNumbersWithComma(product.price)} تومان
                    </span>
                  </p>
                </li>
                <li className="flex  gap-y-2 flex-row lg:gap-x-2">
                  <span className="font-light text-slate-600">تگ ها: </span>
                  {product?.tags?.map((t, i) => {
                    return (
                      <span
                        key={i}
                        className="border border-gray-150 rounded-md cursor-pointer p-2  flex justify-center items-center mx-1"
                      >
                        {t}
                      </span>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* left box bottn add to cart in desktop */}

        <div className="md:w-1/2 lg:h-full hidden md:block">
          <div className="text-slate-800 flex flex-col gap-y-4 bg-gray-50 p-4 rounded-md">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">فروشنده : </span>
              </div>
              <span className="font-light text-xs mr-1">دیجی تایز</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">گارانتی : </span>
              </div>
              <span className="font-light text-xs mr-1">18 ماه زرین خدمت</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">ارسال توسط : </span>
              </div>
              <span className="font-light text-xs mr-2">انبار تهران</span>
            </div>

            <div className="mt-10">
              <div className="mb-4 w-full text-orange-500 font-bold text-xl text-center">
                {!!product.discount && (
                  <div className="flex items-center gap-x-2 mb-6">
                    <p className="text-sm">
                      قیمت با تخفیف :{" "}
                      {toPersianNumbersWithComma(product.offPrice)}
                    </p>
                    <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                      {toPersianNumbersWithComma(product.discount)} %
                    </div>
                  </div>
                )}
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentInfo;
