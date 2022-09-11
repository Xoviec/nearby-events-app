import { trpc } from "../../utils/trpc";
import Image from "next/image";
import concertIcon from "../../images/concert.png"
import wrenchIcon from "../../images/wrench.png"
import sportIcon from "../../images/sport.png"
import ellipsisIcon from "../../images/ellipsis.png"
import inspirationIcon from "../../images/inspiration.png"
import { ImageConfig } from "next/dist/shared/lib/image-config";


    export type AssetOfficialProps = {
        organizer?: string;
        date?: string;
        place?: string;
        description?: string;
        category?: string
        icon?: any
    }


export const AssetOfficialEvent = (props: AssetOfficialProps) =>{

    const officcialEvents = trpc.useQuery(["officialEvent.getAll"]);
    // console.log(places?.data[0]?.address)
    console.log(props.category)
    // console.log(props.organizer, props.date)

    return(
        // <div className="flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[22rem] h-[30rem] bg-copy border border-card-cap-bg mr-5 ml-5 rounded-lg cursor-pointer font-poppins">

                <div className={`${props.category== 'Warsztaty' ? 'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-copy border border-card-cap-bg  rounded-lg cursor-pointer font-poppins' : 
                        props.category=='Sport' ? 'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-blu border border-card-cap-bg  rounded-lg cursor-pointer font-poppins':
                        props.category=='Koncert' ? 'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-concert border border-card-cap-bg  rounded-lg cursor-pointer font-poppins':
                        props.category=='Edukacja' ? 'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-orange border border-card-cap-bg  rounded-lg cursor-pointer font-poppins':
                        props.category=='Inne' ? 'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-green border border-card-cap-bg  rounded-lg cursor-pointer font-poppins':
                            'flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[100%] h-[30rem] bg-green border border-card-cap-bg  rounded-lg cursor-pointer font-poppins'
                }`}>

                <div className={`${props.category== 'Warsztaty' ? 'bg-copy h-[60%] w-[100%] flex items-center justify-center rounded-lg' : 
                        props.category=='Sport' ? 'bg-blu h-[60%] w-[100%] flex items-center justify-center rounded-lg':
                        props.category=='Koncert' ? 'bg-concert h-[60%] w-[100%] flex items-center justify-center rounded-lg':
                        props.category=='Edukacja' ? 'bg-orange h-[60%] w-[100%] flex items-center justify-center rounded-lg':
                        props.category=='Inne' ? 'bg-green h-[60%] w-[100%] flex items-center justify-center rounded-lg':
                            'bg-green h-[60%] w-[100%] flex items-center justify-center rounded-lg'
                }`}>
                <div className="flex flex-col justify-center items-center rounded-full h-32 w-32 bg-gray-800">
                    <div>
                        {
                        (props.category== 'Warsztaty') ? <Image width={80} height={80} src={wrenchIcon} ></Image> :
                        (props.category== 'Sport') ?<Image width={80} height={80} src={sportIcon} ></Image>:
                        (props.category=='Koncert') ?<Image width={80} height={80} src={concertIcon} ></Image> :
                        (props.category== 'Edukacja') ? <Image width={80} height={80} src={inspirationIcon} ></Image> :
                        (props.category== 'Inne') ?<Image width={80} height={80} src={ellipsisIcon} ></Image> :<Image width={80} height={80} src={ellipsisIcon} ></Image>
                        }
                    </div>
                    <div className="absolute mt-48 text-gray-700">{props.category}</div>
                    
                    
                    
                    {/* <a href="https://www.flaticon.com/free-icons/concert" title="concert icons">Concert icons created by Freepik - Flaticon</a> */}
                </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white h-[40%] w-[100%] rounded-lg">
                    <div className="h-[50%] w-[100%] flex justify-center items-center uppercase font-black font-lg">
                        {props.organizer}
                    </div>
                <div className="flex flex-row justify-around h-[50%] w-[100%]">
                  <div>{props.place}</div>
                  <div>{props.date}</div>
                </div>
                </div>
                </div>

    )
}