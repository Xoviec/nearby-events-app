import { trpc } from "../../utils/trpc";

    export type AssetOfficialProps = {
        organizer?: string;
        date?: string;
        place?: string;
        description?: string;

    }


export const AssetOfficialEvent = (props: AssetOfficialProps) =>{

    const officcialEvents = trpc.useQuery(["officialEvent.getAll"]);
    // console.log(places?.data[0]?.address)
    
    // console.log(props.organizer, props.date)

    return(
        <div className="flex flex-col items-end justify-end font-poppins-bold text-gray-100 border-none  w-[22rem] h-[30rem] bg-copy border border-card-cap-bg mr-5 ml-5 rounded-lg cursor-pointer font-poppins">
        <div className="bg-copy h-[60%] w-[100%] flex items-center justify-center rounded-lg">
                <div className="rounded-full h-32 w-32 bg-gray-800"></div>
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