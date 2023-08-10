import LocalFont from "next/font/local";

const estedadFont = LocalFont({
    src: [
      {
        path: "../../../public/font/Estedad-Thin.ttf",
        weight: "100",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-ExtraLight.ttf",
        weight: "200",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-Regular.ttf",
        weight: "400",
        style: "normal",
      },  
      {
        path: "../../../public/font/Estedad-Medium.ttf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-SemiBold.ttf",
        weight: "600",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-Bold.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../../../public/font/Estedad-ExtraBold.ttf",
        weight: "800",
        style: "normal",
      },
    ],
    variable: "--font-estedad",
    style: "normal",
    display: "block",
  });
  
  export default estedadFont;