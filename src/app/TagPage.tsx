// import bgImage from "../Images/image2.jpg"; // or adjust the path as needed

// export default function TagPage() {
//   return (
//     <div
//       className="h-60 w-full bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${bgImage.src})` }}
//     >
//       <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
//         <h1 className="text-white text-3xl font-bold">Hello from Background</h1>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function TagPage({imgurl}: { imgurl: string,}) {
    return(
    <div
  className="h-100 w-full bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${imgurl})` }}
>

    <div className="flex flex-row items-center justify-center text-white p-4 gap-8">
  <div className="max-w-[50%]">
    <div>
       <h1 className=" text-3xl font-bold">
       <span> Bleiben Sie hydriert und <p>laufen Sie jeden Tag</p></span> 
       </h1>
       <p className="mt-4">Wenn du ein Laufevent veranstalten möchtest, sind wir hier, um dich bei jedem Schritt des Prozesses zu unterstützen. Bei Runnersmeet verstehen wir die Bedeutung von Laufveranstaltungen für die Laufgemeinschaft und sind bereit,</p>
        <button className="w-30 h-9 bg-[#435CBC] text-white rounded hover:bg-[#435CBC] transition mt-4">
          Mehr Sehen
        </button>
    </div>
  </div>
  {/* <div className="max-w-xl p-9">
    <div>
      <h6 className="font-bold mb-3">Eventregistrierung: </h6>
      <p>Du kannst dein Laufevent in unserem Kalender eintragen, damit es von der Laufgemeinschaft gesehen und gefunden werden kann.
</p>
    </div>
  </div> */}

  <div className="max-w-xl p-9 ">
  <div className="bg-white/30 border border-dotted border-white rounded-lg p-3">
    <h6 className="font-bold mb-3">Eventregistrierung:</h6>
    <p>
      Du kannst dein Laufevent in unserem Kalender eintragen, damit es von der
      Laufgemeinschaft gesehen und gefunden werden kann.
    </p>
  </div>
  <div className="bg-white/30 border border-dotted border-white rounded-lg mt-4 p-3">
    <h6 className="font-bold mb-3">Planung und Vorbereitung</h6>
    <p>
      Wir bieten Unterstützung bei der Planung und Vorbereitung deines Laufevents, einschließlich Streckenplanung, Zeitplanung und Sicherheitsmaßnahmen.
    </p>
  </div>
</div>

</div>
  
</div>

    )
}