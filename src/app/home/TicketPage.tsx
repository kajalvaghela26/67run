import React from "react";
import { ticketData } from "../postData";
import Image from "next/image";

export default function TicketPage() {
  return (

<div className="grid grid-cols-2 gap-4 p-4">
  {ticketData.map((el, index) => (
    <div
  key={index}
  className=" p-4 pt-5 pb-5 text-center flex w-full justify-between"
>
  <div className="h-48 w-full ">
    <Image
  src={el.image.ticket1 || el.image.ticket2 || el.image.ticket3 || el.image.ticket4 || el.image.ticket5 || el.image.ticket6}
  alt="My photo"
  width={500} 
  height={890} 
  className="h-full w-full object-cover"
/>
  </div>
  <div className="bg-[#435CBC] h-48 w-full p-4 text-white">
    <h3 className="text-[#FC7BA2] text-md font-bold">{el.mainTitle}</h3>
    <div className="flex items-center gap-2 pt-1">
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
</svg> <p className="text-xs">{el.date}</p>
</div>
<div className="flex items-center gap-2 pt-1">
      <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
</svg>
<p className="text-xs">{el.run}</p> 
</div>
<div className="flex items-center gap-2 pt-1">
      <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
</svg>
<p className="text-xs">{el.time}</p> 
</div>
<div className="flex items-center gap-2 pt-1">
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
</svg> <p className="text-xs">{el.location}</p>
</div>

  </div>
  <div className="bg-black h-48 w-full text-white p-4">
    <h2 className="text-3xl">Ticket</h2>
    <h5>Staring From:</h5>
   {/* <div className="flex  items-center gap-2"> <h3 className="text-[#FC7BA2] text-3xl">{el.price}</h3>/Ticket</div> */}
   <div className="flex items-center justify-center ">
  <div className="flex items-center gap-2">
    <h3 className="text-[#FC7BA2] text-3xl">{el.price}</h3>
    /Ticket
  </div>
</div>
    <button className="w-30 h-9 bg-[#435CBC] text-white rounded hover:bg-[#435CBC] transition">
          Mehr Sehen
        </button>
  </div>
</div>

  ))}
</div>


  );
}