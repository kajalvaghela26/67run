import React from "react";
import Header from "../hader";
import ImageComponent from "../image";
import Footer from "../footer";
import { societiesData } from "../postData";
import Image from "next/image";
export default function SocietiesPage() {
  return (
    <>
    <Header />
    <ImageComponent imgurl={'/images/societies.jpg'} headerLabel={'Vereine'} bottomLabel={'Home-Vereine'}/>
     <div className="flex items-center justify-between  p-4 rounded-md">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Hier ist eine Übersicht über einige der <p> Laufvereine, die auf Runnersmeet aktiv sind:</p> </span>

        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Name des Teams..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        <button className="bg-[#435CBC] text-white px-4 py-2 rounded hover:bg-blue-600">
         Suchen
        </button>
        </div>
      </div>
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-2xl font-bold text-center mb-8">Teamübersicht Vereine</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {societiesData.map((society, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md  flex flex-col items-center justify-center aspect-square"
      >
        <Image
          src={society.img}
          alt={society.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <p className="mt-4 text-center text-sm font-medium">{society.name}</p>
      </div>
    ))}
  </div>
</div>

    <Footer/>
    </>
  );
}
