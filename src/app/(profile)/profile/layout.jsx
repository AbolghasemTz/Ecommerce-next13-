import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";
import estedadFont from "../../../app/constant/localFont";

import "../../globals.css";
import SideBar from "./Sidebar";

export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
        <Toaster />
        <Providers>
          <div className="md:grid grid-cols-4 bg-white h-screen md:mt-[48px] mt-[28px] flex flex-col">
            <div className="col-span-1 md:mb-0 mb-2">
              <SideBar />
            </div>
            <div className="col-span-3">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
