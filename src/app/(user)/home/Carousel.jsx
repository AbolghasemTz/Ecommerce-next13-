"use client"
import React from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { toPersianNumbers } from "../../utils/toPersianNumber";

const images = [
  { url: "/slide1.jpg", alt: "Slider" },
  { url: "/slide2.webp", alt: "Slider" },

];

function Slider(props) {
  return (
    <div dir="ltr" className="mb-9">
      
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {images.map((img, i) => (
            <div key={i} className="text-center">
              <Image
                src={img.url}
                alt={img.alt}
                width={1000}
                height={600}
                className="max-w-[100%]  md:h-[500px] h-[300px]"
              />
              <div className="flex justify-center items-center absolute bottom-[20%] md:left-[40%] sm:left-[30%] left-[18%] px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-source bg-white  text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-60 ">
              لپتاپ های {toPersianNumbers("2023")}
              </div>
            </div>
          ))}
        </Carousel>
    
    </div>
  );
}

export default Slider;
