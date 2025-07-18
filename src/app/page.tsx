// import Footer from "./Component/footer";
// import Header from "./Component/hader";
// import ImageComponent from "./Component/image";
// import TablePage from "./Component/tabelPage";

import Footer from "./footer";
import Header from "./hader";
import ImageComponent from "./image";
import TablePage from "./tabelPage";

export default function Home() {
  return (
    <>
    <Header />
    <ImageComponent imgurl={'/images/image1.jpg'} headerLabel={'Laufkalender'} bottomLabel={'Home-Laufkalender'}/>
    <TablePage/>
    <Footer/>
    </>
  );
}
