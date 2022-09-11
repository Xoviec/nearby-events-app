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





export const AssetYourEvents = () =>{

    let [isOpen, setIsOpen] = useState(false)

    const {data} = useSession();
    const handleSignIn = useCallback(() => signIn(), []);


    const yourEvents = trpc.useQuery(["yourEvent.getAll"]);
    console.log(yourEvents)
    return(<>
            <div className="bg-color-gray-900 flex items-around ">
                {yourEvents.data?.map((yourEvent: any) => 
                    <AssetYourEvent date={yourEvent.date} organizer={yourEvent.organizer} place={yourEvent.place} description={yourEvent.description}> </AssetYourEvent>
                )}
            </div>
            <div className="flex flex-col justify-center items-center w-[30rem] h-[40rem] bg-success-rgb border border-card-cap-bg mr-5 ml-5">
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