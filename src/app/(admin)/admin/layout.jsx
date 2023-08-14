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
          <div className="grid grid-cols-4 bg-white h-screen">
         <div className="col-span-1  overflow-y-auto p-4 bg-slate-400">
        <AdminSideBar />
         </div>
          <div className="col-span-3 overflow-y-auto p-4">{children}</div>
          </div>
       </Providers>
      </body>
    </html>
  );
}
