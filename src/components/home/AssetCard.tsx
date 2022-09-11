import { trpc } from "../../utils/trpc";
import Image from "next/image";
import concertIcon from "../../images/concert.png"
import wrenchIcon from "../../images/wrench.png"
import sportIcon from "../../images/sport.png"
import ellipsisIcon from "../../images/ellipsis.png"
import inspirationIcon from "../../images/inspiration.png"
import { ImageConfig } from "next/dist/shared/lib/image-config";
import { useCallback, useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut} from "next-auth/react";

export function AssetCard(){

    let [isOpen, setIsOpen] = useState(false)

    const {data} = useSession();
    const handleSignIn = useCallback(() => signIn(), []);


    return(
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
                <button className="font-3xl" onClick={() => setIsOpen(true)}>Stwórz własny event</button>      

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

    )
}