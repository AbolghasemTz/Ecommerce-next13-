import "../../globals.css";
import Providers from "../../Providers";
import { Toaster } from "react-hot-toast";
import AdminSideBar from "./AdminSidebar";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className= "font-sans"
      >
         <Providers>
          <Toaster />
          <div className="md:grid grid-cols-4 bg-white h-screen md:mt-[48px] mt-[28px] flex flex-col">
         <div className="col-span-1   p-4 ">
        <AdminSideBar />
         </div>
          <div className="col-span-3  p-4">{children}</div>
          </div>
       </Providers>
      </body>
    </html>
  );
}
