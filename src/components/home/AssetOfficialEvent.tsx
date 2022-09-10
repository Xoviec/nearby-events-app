import { trpc } from "../../utils/trpc";

export const AssetOfficialEvent = () =>{

    const places = trpc.useQuery(["place.getAll"]);
    console.log(places.data[0])


    return(
        <div>
            <div className="flex justify-center items-center w-[30rem] h-[40rem] bg-success-rgb">
                {/* <span>{place.name}</span> */}


            </div>

        </div>
    )
}