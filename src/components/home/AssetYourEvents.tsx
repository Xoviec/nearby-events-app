import { AssetYourEvent } from "./AssetYourEvent"
import { trpc } from "../../utils/trpc";
import { date } from "zod";
import icon from '../../images/add.png'
import Image from "next/image";
import { Dialog, Transition  } from "@headlessui/react";
import Popover, { Form } from "../shared/Popover";
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
import { Autoplay } from "swiper";
import Dropdown from "../shared/Dropdown";




export const AssetYourEvents = () =>{

    let [isOpen, setIsOpen] = useState(false)

    const {data} = useSession();
    const handleSignIn = useCallback(() => signIn(), []);


    const yourEvents = trpc.useQuery(["yourEvent.getAll"]);
    console.log(yourEvents)
    return(<>
    
        
                <Swiper
                spaceBetween={30}
                slidesPerView={2}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                navigation={false}
            >
            <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory asset-cards w-[66%] ">
                {yourEvents.data?.map((yourEvent: any) => 
               <SwiperSlide>
                    <AssetYourEvent date={yourEvent.date} organizer={yourEvent.organizer} place={yourEvent.place} description={yourEvent.description}> </AssetYourEvent>
                </SwiperSlide> 
                )}
            </div>
            </Swiper>
            
            
        <div className="flex  items-center justify-center w-[50%]">
            <div className='flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none h-[30rem] w-[90%] bg-green border border-card-cap-bg  rounded-lg cursor-pointer font-poppins'>
                <div className="test bg-green h-[60%] w-[100%] flex items-center justify-center rounded-lg">
                <div className="flex flex-col justify-center items-center rounded-full h-32 w-32 bg-gray-800">
                    <div>
                        <Image width={80} height={80} src={ellipsisIcon} ></Image>
                    </div>
                    <div className="absolute mt-48 text-gray-700"></div>
                    {/* <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Freepik - Flaticon</a> */}
                </div>
                </div>
                <div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white h-[40%] w-[100%] rounded-lg">
                    <div className="h-[50%] w-[100%] flex justify-center items-center uppercase font-black font-lg">
                    {
                    !!data?
                    //  <Popover title='Stwórz swoje wydarzenie!'></Popover> 
                    <>           
                    <button className="font-3xl" onClick={() => setIsOpen(true)}>
                    <Dropdown title={'Utwórz wydarzenie'}>
                        <div className="flex flex-col" >
                            <button className="h-8">Ustawienia</button>
                            <Form/>
                        </div>
              </Dropdown> 
                        </button>      

                  </>
                     :
                    <button className="font-3xl" onClick={handleSignIn}>Zaloguj się aby utworzyć wydarzenie!</button>
                }
                    </div>
                <div className="flex flex-row justify-around h-[50%] w-[100%]">                 
                </div>
                </div>          
            </div>
        </div>

            </>
    )
}