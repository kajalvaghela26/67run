import React from "react";
import Header from "../hader";
import ImageComponent from "../image";
import Footer from "../footer";
import BrandPage from "../home/brandPage";
import AboutUs from "../home/aboutus";
import aboutUsImage from "../../Images/aboutUs.jpg";
import OtherImage from "../../Images/aboutImage.jpg";
import DiscoverAboutPage from "./discoverPage";
export default function Home() {
  return (
    <>
    <Header />
    <ImageComponent imgurl={'/images/aboutAs.jpg'} headerLabel={'Über uns'} bottomLabel={'Home-Über uns'}/>
    <AboutUs imageUrl={aboutUsImage} title1={'Über uns'} title2={'Willkommen bei Runnersmeet'} p1={'Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.'} p2={'Sebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.'} p3={'Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.'} p4={'Sebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.'} btnShow={false}  />
    <DiscoverAboutPage/>
    <AboutUs imageUrl={OtherImage} p1={'Vereine sind bei uns ebenfalls bestens aufgehoben. Ihr könnt eure Mannschaft eintragen, Mannschaftsmeldungen machen und detaillierte Statistiken zu euren Läufern einsehen. Aber das ist noch nicht alles – wir bieten auch die Möglichkeit, eigene Läufe zu organisieren und sie in unseren Kalender einzutragen.'} p2={'Unsere Mission bei Runnersmeet ist es, die Laufgemeinschaft zu stärken und Läufern die Werkzeuge zur Verfügung zu stellen, um ihre Laufziele zu erreichen. Egal, ob du alleine läufst, in einem Verein bist oder deinen eigenen Lauf veranstalten möchtest – Runnersmeet ist deine Plattform.'} p3={'Wir sind stolz darauf, Teil dieser wunderbaren Laufgemeinschaft zu sein und freuen uns darauf, dich auf Runnersmeet willkommen zu heißen. Zusammen werden wir laufen, stärker werden und unsere Laufziele erreichen. Laufen verbindet uns, und Runnersmeet ist der Ort, an dem diese Verbindung lebendig wird.'}  btnShow={true} btnName="Tritt Heute Bei" btncolor="#FC7BA2"  />
    <BrandPage/>
    <Footer/>
    </>
  );
}
