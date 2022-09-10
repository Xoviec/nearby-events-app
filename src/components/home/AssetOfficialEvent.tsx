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
            <div className="flex flex-col justify-center items-center w-[30rem] h-[40rem] bg-success-rgb border border-card-cap-bg mr-5 ml-5">
                <span>Organizer: {props.organizer}</span>
                <span>Data: {props.date}</span>
                <span>Miejsce: {props.place}</span>
                <span>Opis: {props.description}</span>

            </div>

    )
}