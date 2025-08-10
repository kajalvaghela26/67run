import React from 'react';



export default function FourRectangles() {
  return (
    <div className="p-4 flex items-center justify-center bg-gray-100">
      <div className="flex gap-6">
        {/* Rectangle 1 (default) */}
        <div className="w-50 h-20 bg-[#EAEAEA] -skew-x-12 shadow-md flex flex-col items-center justify-center text-center">
  <p className="text-[#435CBC] font-bold text-lg">2,543</p>
  <p className="text-sm">Active Runners</p>
</div>

        {/* Rectangle 2 (default) */}
        <div className="w-50 h-20 bg-[#FB7BA2] text-white -skew-x-12 shadow-md flex flex-col items-center justify-center text-center">
            <p className=" font-bold text-lg">175+</p>
  <p className="text-sm">Event & Challenges</p>
        </div>

        {/* Rectangle 3 (default) */}
        <div className="w-50 h-20 bg-[#EAEAEA] -skew-x-12 shadow-md flex flex-col items-center justify-center text-center">
            <p className="text-[#435CBC] font-bold text-lg">15+</p>
  <p className="text-sm">Years Experience</p>
        </div>

        {/* Rectangle 4 (different) */}
        <div className="w-50 h-20 bg-[#FB7BA2] text-white -skew-x-12 shadow-xl flex flex-col items-center justify-center text-center">
            <p className=" font-bold text-lg">25</p>
  <p className="text-sm">Expert Coaches</p>
        </div>
      </div>
    </div>
  );
}
