import estedadFont from "../../app/constant/localFont";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";
import HeaderMobile from "../components/HeaderMobile";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "صفحه اصلی",
  description: "صفحه اصلی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans bg-gray-100`}
      >
        <Toaster />
        <Providers>
          <HeaderMobile />
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
