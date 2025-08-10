import Image, { StaticImageData } from "next/image";
import React from "react";

 interface props {
  imageUrl?: string | StaticImageData;
  title1?: string;
  title2?: string;
  p1?: string;
  p2?: string;
   p3?: string;
  p4?: string;  
  btnShow?: boolean;
  btnName?: string;
  btncolor?: string;}
export default function AboutUs({imageUrl,title1,title2,p1,p2,p3,p4,btnShow,btnName,btncolor}:props) {  

    return(
        <div className="flex flex-row items-center justify-center min-h-screen  p-4 m-4 gap-8">
  <div className="max-w-[50%]">
    <div>
             <Image
      src={imageUrl || '../../Images/aboutUs.jpg'}
      alt="About Us"
      width={490}
      className=" h-150 bg-cover rounded-lg shadow-lg"
    /> 
    </div>
  </div>
  <div className="max-w-xl p-9">
    <h6>{title1}</h6>
    <h1 className="text-4xl font-bold mb-4">{title2}</h1>

    <p className="pt-4">{p1}</p>
<p className="pt-4">{p2}</p>
<p className="pt-4">{p3}</p>
<p className="pt-4">{p4}</p>
    {btnShow &&(<button className={`w-30 h-9 bg-[${btncolor}] text-white rounded hover:bg-[#435CBC] transition mt-4`}>
          {btnName || 'Mehr Sehen'}
        </button>)}
  </div>
</div>

    )
}