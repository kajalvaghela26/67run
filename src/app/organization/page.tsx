import React from "react";
import Header from "../hader";
import ImageComponent from "../image";
import Footer from "../footer";
import Image from "next/image";
import calendar from "../../Images/calendar.png";
import prepration from "../../Images/prepration.png";
import report from "../../Images/report.png";
import deal from "../../Images/deal.png";
import click from "../../Images/click.png";
import management from "../../Images/management.png";
export default function OrganizationPage() {
  return (
    <>
    <Header />
    <ImageComponent imgurl={'/images/organization.jpg'} headerLabel={'Für Veranstalter'} bottomLabel={'Home-Für Veranstalter'}/>
      <div className=" p-7 mr-70">
    <h2 className="text-xl font-bold pt-5 ">Aktuell nur D, CH, A</h2>    
    <p className="pt-5">Wenn du ein Laufevent veranstalten möchtest, sind wir hier, um dich bei jedem Schritt des Prozesses zu unterstützen. Bei Runnersmeet verstehen wir die Bedeutung von Laufveranstaltungen für die Laufgemeinschaft und sind bereit, unsere Ressourcen zur Verfügung zu stellen.
</p>
<h6 className="font-bold pt-5">Hier ist, wie wir dir bei der Organisation deines Laufevents helfen können:</h6>
<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={calendar}
      alt="calendar"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Eventregistrierung:</span>
        Du kannst dein Laufevent in unserem Kalender eintragen, damit es von der Laufgemeinschaft gesehen und gefunden werden kann.
      </p>
    </div>
  </div>
</div>

<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={prepration}
      alt="prepration"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />
 

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Planung und Vorbereitung:</span>
        Wir bieten Unterstützung bei der Planung und Vorbereitung deines Laufevents, einschließlich Streckenplanung, Zeitplanung und Sicherheitsmaßnahmen.
      </p>
    </div>
  </div>
</div>
 

<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={report}
      alt="report"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Ergebnislisten und Statistiken:</span>
        Wir helfen dir dabei, Ergebnislisten zu erstellen und Statistiken zu deinem Event zu verfolgen. Dies ermöglicht den Teilnehmern, ihre Leistungen zu überwachen und sich mit anderen Läufern zu vergleichen.
      </p>
    </div>
  </div>
</div>

<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={deal}
      alt="deal"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Sponsoring:</span>
         Wenn du Unterstützung beim Sponsoring für dein Event benötigst, stehen wir dir zur Seite. Wir können dir dabei helfen, Sponsoren zu identifizieren und Partnerschaften zu entwickeln, um dein Event noch erfolgreicher zu machen
      </p>
    </div>
  </div>
</div>

<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={click}
      alt="click"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />
 

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Werbung und Promotion:</span>
        Wir unterstützen dich bei der Werbung für dein Event auf unserer Plattform und in den sozialen Medien, um sicherzustellen, dass es die maximale Aufmerksamkeit erhält.
      </p>
    </div>
  </div>
</div>

<div className=" flex justify-start">
  <div className="bg-white rounded-lg p-4 flex items-center gap-4 w-full max-w-5xl">
    <Image
      src={management}
      alt="management"
      width={40}
      height={40}
      className="rounded-md object-cover bg-[#FFD7E3] "
    />
 

    <div className="flex flex-row flex-wrap items-center text-sm text-gray-700">
            <p className="text-sm text-gray-600">
                <span className="font-semibold text-base mr-2 text-[#3652BD] ">Teilnehmerverwaltung:</span>
        Wir bieten Tools zur einfachen Verwaltung von Teilnehmerregistrierungen und zur Kommunikation mit den Teilnehmern.
      </p>
    </div>
  </div>
</div>
<p className="pt-5">Wenn du bereit bist, dein Laufevent zu planen und möchtest, dass Runnersmeet dich dabei unterstützt, kontaktiere uns einfach, und wir werden gerne mit dir zusammenarbeiten, um sicherzustellen, dass dein Event ein großer Erfolg wird. Laufen verbindet Menschen, und wir freuen uns darauf, dazu beizutragen, dass dein Event ein unvergessliches Erlebnis wird.</p>
</div>


 

    <Footer/>
    </>
  );
}
