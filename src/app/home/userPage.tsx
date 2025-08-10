import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import user1 from "../../Images/user1.jpg";
import user2 from "../../Images/user2.jpg";
import user3 from "../../Images/user3.jpg";
import user4 from "../../Images/user4.jpg";

export default function UserPage() {
    return(
    <div className="flex flex-wrap gap-6 justify-center p-6">
  {/* Card 1 - White */}
  <div className="w-72 bg-white rounded-lg shadow p-6">
    <h6 className="text-xs">Referenzen</h6>
    <h2 className="text-lg font-bold mb-2 text-xl">Tausend Kunden vertrauen darauf</h2>
   <h6 className="text-xs mb-3">Aliquam lorem ante dapibus in viverra quis feugiat a tellus. Phasellus viverra metus .</h6>
    <div className="flex -space-x-4">
      <Image className="w-10 h-10 rounded-full border-2 border-white" src={user1} alt="User 1"  width={0} height={0} />
      <Image className="w-10 h-10 rounded-full border-2 border-white" src={user2} alt="User 2" width={0} height={0} />
      <Image className="w-10 h-10 rounded-full border-2 border-white" src={user3} alt="User 3" width={0} height={0}/>
      <Image className="w-10 h-10 rounded-full border-2 border-white" src={user4} alt="User 3" width={0} height={0}/>
      <span className="w-20 h-10 ml-5 flex flex-col items-left justify-center text-gray-600 text-xs leading-tight">
  <span className="font-semibold">+5</span>
  <span className="text-[10px]">Happy Runners</span>
</span>
    </div>
  </div>

  {/* Card 2 - Blue */}
  <div className="w-72 bg-[#FC7BA2] text-white rounded-lg shadow p-6">
    <div className="text-sm">Running Used To Be a Solitary Activity For Me, But The Social Events Organized By The Club Changed That. From 
Post-Run Brunches to Themed Runs.</div>
 <div className="flex mb-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    <div className="flex -space-x-4 pt-4">
      <Image className="w-10 h-10 rounded-full border-2 " src={user1} alt="User 4" width={0} height={0} />
      <span className="w-20 h-10 ml-5 flex flex-col items-left justify-center  text-xs leading-tight">
  <span className="font-semibold">Sarah Barnes</span>
  <span className="text-[10px]">Designer</span>
</span>
    </div>
  </div>

  {/* Card 3 - Green */}
   <div className="w-72 bg-[#B8C5F8]  rounded-lg shadow p-6">
    <div className="text-sm">Running Used To Be a Solitary Activity For Me, But The Social Events Organized by The Club Changed That. From 
Post-Run Brunches to Themed Runs.</div>
 <div className="flex mb-2 mt-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    <div className="flex -space-x-4 pt-4">
      <Image className="w-10 h-10 rounded-full border-2 " src={user3} alt="User 4" width={0} height={0} />
      <span className="w-29 h-10 ml-5 flex flex-col items-left justify-center  text-xs leading-tight">
  <span className="font-semibold">Sabrina James</span>
  <span className="text-[10px]">Influencer</span>
</span>
    </div>
  </div>
</div>

    )

}
