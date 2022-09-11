import { AssetOfficialEvent } from "./AssetOfficialEvent"
import { trpc } from "../../utils/trpc";
import { date } from "zod";
import { useSession } from "next-auth/react";


export const AssetOfficialEvents = () =>{

    const {data} = useSession();


    const officialEvents = trpc.useQuery(["officialEvent.getAll"]);
    console.log(officialEvents)
    return(
            <div className="bg-color-gray-900 flex mr-5 ml-5 items-around w-[100%]">
                {officialEvents.data?.map((officialEvent: any) => 
                
                    <AssetOfficialEvent date={officialEvent.date} organizer={officialEvent.organizer} place={officialEvent.place} description={officialEvent.description}> </AssetOfficialEvent>
                )}
            </div>
    )
}