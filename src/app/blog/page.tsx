import Link from "next/link";
import Footer from "../footer";
import Header from "../hader";
import ImageComponent from "../image";
import { blogData } from "../postData";
import Image from "next/image";

export default function blogPage() {
  return (
    <>
    <Header />
    <ImageComponent imgurl={'/images/blogImage.jpg'} headerLabel={'Blog-Seite'} bottomLabel={'Home-Blog'}/>

        <h1 className="text-2xl font-bold p-5 text-center">Ereignisprotokolle</h1>
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-80 h-90">
              <Image
                src={item.img}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className=" pl-3 pt-3 ">
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>

            <div className=" pl-3 pt-1">
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>

            <div className="p-3">
  <Link
    href={`/blogDetails/${item.id}`}
    className="flex items-center gap-2 text-blue-600"
  >
    <span className="text-sm font-medium underline underline-offset-4">
      Mehr sehen
    </span>
    <svg
      className="w-6 h-6 text-[#435CBC] dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  </Link>
</div>

          </div>
        ))}
      </div>
    </div>
 
 <div className="flex items-center justify-center m-4">
    <button className="w-30 h-9 bg-[#435CBC] text-white rounded hover:bg-[#435CBC] transition mt-4">
          Mehr Sehen
        </button>
 </div>

    <Footer/>
    </>
  );
}
