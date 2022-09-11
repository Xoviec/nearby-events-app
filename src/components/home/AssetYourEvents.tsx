import { AssetYourEvent } from "./AssetYourEvent"
import { trpc } from "../../utils/trpc";
import { date } from "zod";
import icon from '../../images/add.png'
import Image from "next/image";
import { Dialog, Transition  } from "@headlessui/react";
import Popover from "../shared/Popover";
import { useCallback } from "react";
import { signIn, useSession } from "next-auth/react";
import { AssetDialog } from "../shared/AssetDialog";
import { useState, Fragment } from 'react'
import ellipsisIcon from "../../images/ellipsis.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";


import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper";




export const AssetYourEvents = () =>{

    let [isOpen, setIsOpen] = useState(false)

    const {data} = useSession();
    const handleSignIn = useCallback(() => signIn(), []);


    const yourEvents = trpc.useQuery(["yourEvent.getAll"]);
    console.log(yourEvents)
    return(<>

<Swiper
        spaceBetween={250}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        navigation={false}
      >
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory asset-cards ">
                {yourEvents.data?.map((yourEvent: any) => 
               <SwiperSlide>

                    <AssetYourEvent date={yourEvent.date} organizer={yourEvent.organizer} place={yourEvent.place} description={yourEvent.description}> </AssetYourEvent>
                </SwiperSlide> 
                )}
            </div>
            </Swiper>


            <div className='flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  h-[30rem] bg-green border border-card-cap-bg  rounded-lg cursor-pointer font-poppins'>
                <div className="bg-green  flex items-center justify-center rounded-lg"></div>
                <div className="flex flex-col justify-center items-center rounded-full h-32 w-32 bg-gray-800"></div>
                <div>
                    <Image width={80} height={80} src={ellipsisIcon} ></Image>
                </div>
                <div className="absolute mt-48 text-gray-700">tekst</div>

                
                <button>
                    <Image width={100} height={100}  src={icon} alt="" />  
                    {/* <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Freepik - Flaticon</a> */}
                </button>
                {
                    !!data?
                    //  <Popover title='Stwórz swoje wydarzenie!'></Popover> 
                    <>           
                    <button  onClick={() => setIsOpen(true)}>Hej</button>      


                    
                  </>
                     :
                    <button onClick={handleSignIn}>Zaloguj się aby utworzyć wydarzenie!</button>
                }
                {/* <span className="">Stwórz swoje wydarzenie!</span> */}
                
                
                    

            </div>

            </>
    )
}