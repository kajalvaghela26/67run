import React from "react";
import brand4 from "../../Images/brand4.png";
import brand3 from "../../Images/brand3.png";
import brand2 from "../../Images/brand2.png";
import brand1 from "../../Images/brand1.png";
import brand from "../../Images/brand.png";
import Image from "next/image";

export default function BrandPage(){
    const brandList=[brand4,brand,brand3,brand2,brand1,brand];
     return(
        <div>
            <h2 className="text-[#373737] text-center font-bold text-2xl p-4">Veranstaltungspartner</h2>
           <div className="flex flex-row flex-wrap gap-4 justify-center items-center p-4">
  {
    brandList.map((brandImage, index) => (
      <div key={index} className="flex items-center justify-center p-4">
        <Image
          src={brandImage}
          alt={`Brand ${index + 1}`}
          className="h-20 w-auto object-contain"
        />
      </div>
    ))
  }
</div>
        </div>
     )
}