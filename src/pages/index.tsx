import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { userAgent } from "next/server";
import { Menu } from '@headlessui/react'
import Dropdown from "../components/shared/Dropdown";
import { AssetOfficialEvents } from "../components/home/AssetOfficialEvents";
import { AssetYourEvents } from "../components/home/AssetYourEvents";
import icon from '../images/cooperation.jpg'
import Image from "next/image";
import { AssetCreateEvent } from "../components/home/AssetCreateEvent";
import { AssetInfo } from "../components/home/AssetInfo";


export function Form() {

  const addPlaceMutation = trpc.useMutation(["place.add",])

  function addPlace(event){
    event.preventDefault()
    console.log(event.target.name.value)
    const place = {
      name: event.target.name.value,
      rating: +event.target.rating.value,
      address: event.target.address.value,
      description: event.target.description.value
    }
    addPlaceMutation.mutate({...place})
    

  }

  return (
    <form onSubmit={addPlace}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Rating</label>
      <input type="text" name="rating" required />

      <label>Address</label>
      <input type="text"  name="address" required />

      <label>Description</label>
      <input type="text" name="description" required />

      <button type="submit">Submit</button>
    </form>
  )
}

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const places = trpc.useQuery(["place.getAll"]);
  const cars = trpc.useQuery(["car.getAll"]);
  const {data} = useSession();
  const [page, setPage] = useState('info')


  const handleSignIn = useCallback(() => signIn(), []);
  const handleSignOut = useCallback(() => signOut(), []);

  console.log(places)
  console.log(cars)
  console.log(!!data) //tu jest czy zalogowany

  function urEvents(){
    setPage('elo')
  }

  function oEvents(){
    setPage('official')
  }
  function info(){
    setPage('info')
  }

  return (
    <>
      <div className="bg-[#d95a41]">
   

      <header className="fixed flex w-[100%] h-16 bg-header">
        <div className="ml-4 mt-3">
          <Image className="p-4 m-4 rounded" width={50} height={40}  src={icon} alt="" />  
          {/* <a href="https://www.flaticon.com/free-icons/cooperation" title="Cooperation icons">Cooperation icons created by Freepik - Flaticon</a> */}
        </div>
        
        <div className="w-[6%] flex items-center justify-center bg-header text-[#ec583a] font-poppins font-bold text-lg">
            BB4US
          </div>
        <div className="bg-header w-[60%] pl-20 flex items-center justify-around">
        <button
              className="bg-transparent h-[60%] w-[20%] font-poppins text-[#ec583a] uppercase rounded-xl border-2 font-bold hover:bg-[#ec583a] hover:text-header"
              onClick={oEvents}
            >
              oficjalne
            </button>
            <button
              className="bg-transparent h-[60%] w-[20%] font-poppins text-[#ec583a] uppercase rounded-xl border-2 font-bold hover:bg-[#ec583a] hover:text-header"
              onClick={urEvents}
            >
              wasze eventy
            </button>
            <button
              className="bg-transparent h-[60%] w-[20%] font-poppins text-[#ec583a] uppercase rounded-xl border-2 font-bold hover:bg-[#ec583a] hover:text-header"
              onClick={info}
            >
              Informacje
            </button>
        </div>
        <div className="w-[20%] bg-header"> </div>
        <div className="flex w-[10%] items-center justify-center">
          {
            !!data ? 
           
              <Dropdown title={'Witaj ' + data.user?.name+ '!'}>
                <div className="flex flex-col" >
                  <button className="h-8 hover:bg-danger-rgb hover:text-gray-100 hover:shadow-md">Ustawienia</button>
                  <button onClick={handleSignOut} className="h-8 hover:bg-danger-rgb hover:text-gray-100 hover:shadow-md">Logout</button>

                </div>
              </Dropdown> 
  
            : <button className="inline-flex justify-center w-full px-4 text-sm font-medium text-header-item-color-dark hover:text-header-item-color" onClick={handleSignIn}>Login</button>
          }
        </div>
      </header>

      <main className="min-h-screen ">



        <div className="w-[100%] mt-56 flex fixed justify-center items-center">

          {
            (page == 'official') ? <AssetOfficialEvents/> :
            (page == 'info') ? <AssetInfo/> :
            <AssetYourEvents/>
          }
          
          
        </div>

        <div className="flex flex-col items-between w-96">

         

        </div>
      </main>
      </div>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
