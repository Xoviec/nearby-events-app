import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { EffectFlip, Mousewheel, Navigation, Pagination } from "swiper";
import { AssetForm } from "./AssetForm";
import { AssetCard } from "./AssetCard";

export function AssetCreateEvent(){

  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
  

      </Swiper>
    </>
  );
}