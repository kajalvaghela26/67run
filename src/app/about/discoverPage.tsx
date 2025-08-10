import Image from "next/image";
import React from "react";
import runnerImage from "../../Images/runnerTwo.png";

export default function DiscoverAboutPage() {  

    return(
<div>
  <div className="flex flex-row items-center justify-center bg-[#435CBC] pl-0 p-4 mt-11 mb-9 gap-8 relative overflow-visible">
    <div className="w-full max-w-md text-white text-left">
  
  <p className="mt-3">
    Marc, unser Software-Spezialist und Entwickler, ist der Mann, der die Magie hinter den Codes vollbringt. Als Computernerd mit einer Leidenschaft für Details stellt er sicher, dass unsere Plattform nicht nur gut aussieht, sondern auch zuverlässig und benutzerfreundlich ist.
  </p>
  <p className="mt-3">
    Was bietet Runnersmeet? Für Laufbegeisterte haben wir einen umfassenden Kalender, der alle Volksläufe sowohl weltweit als auch lokal auflistet. Du kannst ein persönliches Profil erstellen und deine Teilnahmen mit detaillierten Statistiken verfolgen. Die Anmeldung für Volksläufe war noch nie so einfach wie auf unserer Plattform.
  </p>
  <button className="w-30 h-9 bg-[#FC7BA2] text-white rounded hover:bg-[#435CBC] transition mt-4">
          Tritt Heute Bei
        </button>
</div>

    <div className="relative z-10">
      <div className="relative   p-2  -mt-40 -mb-40 items-right">
        <Image
          src={runnerImage}
          alt="About Us"
          width={490}
          className="h-[470px] m-5 w-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

    )
}