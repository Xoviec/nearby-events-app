import { trpc } from "../../utils/trpc";

    export type AssetOfficialProps = {
        currency?: string;
        currencySign?: string;
        regularMarketPrice?: number;
        regularMarketChangePercent?: number;
        regularMarketDayHigh?: number;
        regularMarketDayLow?: number;
        id: string;
        historical?: {x: number, y: string}[]
    }


export const AssetOfficialEvent = (Props: AssetOfficialProps) =>{

    const places = trpc.useQuery(["place.getAll"]);
    console.log(places?.data[0]?.address)



    return(
        <div>
            <div className="flex justify-center items-center w-[30rem] h-[40rem] bg-success-rgb">
                
            <div className="flex flex-col items-between w-96">

                <span>{Props.currency}</span>

            </div>


            </div>

        </div>
    )
}