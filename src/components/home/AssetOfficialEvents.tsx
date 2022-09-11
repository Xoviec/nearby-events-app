import { AssetOfficialEvent } from "./AssetOfficialEvent"
import { trpc } from "../../utils/trpc";
import { date } from "zod";
import { useSession } from "next-auth/react";

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
            <div className="bg-color-gray-900 flex mr-5 ml-5 items-around w-[100%]">
                {officialEvents.data?.map((officialEvent: any) => 
                
                    <AssetOfficialEvent date={officialEvent.date} organizer={officialEvent.organizer} place={officialEvent.place} description={officialEvent.description} category={officialEvent.category}> </AssetOfficialEvent>
                )}
            </div>
    )
}