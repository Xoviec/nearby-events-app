import { AssetOfficialEvent } from "./AssetOfficialEvent"
import { trpc } from "../../utils/trpc";
import { date } from "zod";
import { useSession } from "next-auth/react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";


import 'swiper/css';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";
import concertIcon from "../../images/concert.png"
import wrenchIcon from "../../images/wrench.png"
import sportIcon from "../../images/sport.png"
import ellipsisIcon from "../../images/ellipsis.png"
import inspirationIcon from "../../images/inspiration.png"

export const AssetOfficialEvents = () =>{

    const {data} = useSession();


    const officialEvents = trpc.useQuery(["officialEvent.getAll"]);
    console.log(officialEvents)
    return(
       
      <Swiper
        spaceBetween={250}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        navigation={true}
      >
            <div className="  overflow-x-auto scroll-smooth snap-x snap-mandatory asset-cards">
                {officialEvents.data?.map((officialEvent: any) => 
                <SwiperSlide>
                  <AssetOfficialEvent date={officialEvent.date} organizer={officialEvent.organizer} place={officialEvent.place} description={officialEvent.description} category={officialEvent.category}> </AssetOfficialEvent>
                </SwiperSlide> 
                )}
            </div>
            </Swiper>
    )
}