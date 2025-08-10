import Image from "next/image";
import React from "react";
import runnerImage from "../../Images/image1.png";

export default function DiscoverPage() {  

    return(
<div>
  <div className="flex flex-row items-center justify-center bg-[#435CBC] pl-0 p-4 mt-11 mb-9 gap-8 relative overflow-visible">
    <div className="w-full max-w-md text-white text-left">
  <h1 className="text-2xl font-bold">
    <span>
      Entdecken Sie Die Freude
      <p>Am Laufen - Tritt Heute Bel!</p>
    </span>
     
  </h1>
  <p className="mt-3">
    Aliquam lorem ante dapibus in viverra quis feugiat a tellus. Phasellus viverra metus varius laoreet.
  </p>
  <button className="w-30 h-9 bg-[#FC7BA2] text-white rounded hover:bg-[#435CBC] transition mt-4">
          Tritt Heute Bei
        </button>
</div>

    <div className="relative z-10">
      <div className="relative   p-2  -mt-20 -mb-20 items-right">
        <Image
          src={runnerImage}
          alt="About Us"
          width={490}
          className="h-[400px] m-5 w-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

    )
}