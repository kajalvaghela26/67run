import React from "react";
import Header from "../hader";
import Footer from "../footer";
import ImageSlider from "../slidePage";
import TicketPage from "./TicketPage";
import AboutUs from "./aboutus";
import FourRectangles from "./ractangle";
import DiscoverPage from "./discoverPage";
import TagPage from "../TagPage";
import BrandPage from "./brandPage";
import UserPage from "./userPage";
import aboutUsImage from "../../Images/aboutUs.jpg";
export default function HomePage (){
  return (
    <>
    <Header />
    <ImageSlider/>
    <h2 className="text-center p-4 font-bold text-2xl">
  Kommende Veranstaltungen
</h2>
<TicketPage />
<div className="text-center p-4 font-bold">
    <button className="w-80 h-9 bg-[#435CBC] text-white rounded hover:bg-[#435CBC] transition">
          Weitere Veranstaltungen Anzeigen
        </button>
</div>
<AboutUs imageUrl={aboutUsImage} title1={'Über uns'} title2={'Willkommen bei Runnersmeet'} p1={'Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.'} p2={'Sebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.'} p3={'Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.'} p4={'Sebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.'} btnShow={true} btnName={'Mehr Sehen'} btncolor='#435CBC'/>
<FourRectangles/>
<TagPage imgurl={'/images/imageData.jpg'} />
<UserPage/>
<DiscoverPage/>
<BrandPage/>
    <Footer/>
    </>
  );
}