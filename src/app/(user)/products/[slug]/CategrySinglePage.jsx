import React from "react";

function CategrySinglePage() {
  return (
    <div className="hidden md:block col-span-4 lg:col-span-2 xl:col-span-2 row-span-2">
      <div className="bg-white p-5 rounded-xl max-h-[calc(100vh_-_140px)] overflow-y-auto sticky top-28">
        <div className="mb-7">
          <div className="text-xl font-bold text-orange-500 mb-5">
            دسته بندی
          </div>
          <ul className="">
            <li className="mb-2">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                  <svg
                    className="w-4 h-5 absolute top-1.5 right-1"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 1.75 1.75 1 4.75 1h4.5c3 0 3.75.75 3.75 3.75ZM8.5 3.625h-3"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 13.825A1.163 1.163 0 1 0 7 11.5a1.163 1.163 0 0 0 0 2.325Z"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="mr-2">گوشی موبایل</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                  <svg
                    className="w-4 h-4 absolute right-1 top-1.5"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.293 1.333H11.7c2.373 0 2.967.594 2.967 2.96v4.22c0 2.374-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.586-2.96-2.953V4.294c0-2.367.594-2.96 2.96-2.96ZM8 11.48v3.187M1.333 8.666h13.334M5 14.666h6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="mr-2">لپ تاپ</span>
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="hover:bg-gray-50 cursor-pointer flex rounded-md items-center text-slate-800 py-2"
              >
                <span className="relative w-5 h-5 rounded-full bg-gray-100">
                  <svg
                    className="w-4 h-4 absolute right-1 top-1.5"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.666 12.667h4.667c1.553 0 2.333-.78 2.333-2.333V5.667c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 1.333H5.333M10.666 14.666H5.333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.667 6.333v2h2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="mr-2">ساعت هوشمند</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategrySinglePage;
