/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import Footer from "@/app/footer";
import Header from "@/app/hader";
import ImageComponent from "@/app/image";
import { blogData, blogDetailsData } from "@/app/postData";
import Image from "next/image";
import mainImage from "../../../../public/images/aboutAs.jpg";
import { notFound } from "next/navigation";
import Link from "next/link";
import admin from '../../../Images/adminImage.png';

interface Post {
  id: string;
  name: string;
  img?: any;
  description?: string;
}

async function getPost(id: string): Promise<Post | null> {
  return blogData.find((post) => post.id.toString() === id) || null;
}

export default async function BlogDetailsPost({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  if (!post) {
    notFound();
  }

  console.log("Post Details:", post);
  return (
    <>
      <Header />
      <ImageComponent
        imgurl={"/images/image1.jpg"}
        headerLabel={post.name}
        bottomLabel={"Home-Blog details"}
      />
      <div className="ml-50 mr-60">
        <div className="flex items-center justify-between  pt-4 pb-3 rounded-md">
        <div className="flex items-center font-bold space-x-2">
          <span className="text-[#435CBC] ">Sep 4, 2023</span>|
         <Image className="w-7 h-7 rounded-full border-2 " src={admin} alt="User 4" width={0} height={0} />
          <span className="text-[#435CBC] ">By Admin</span>
        </div>

      </div>
        <h2 className="text-2xl font-bold">
          Wie unser Laufclub Sie vorbereitet.
        </h2>

        <div className="flex items-center gap-2 ml-2 mt-2">
                <div>Teilen Sie diese Neuigkeiten :</div>
                <div>
                 <svg className ="w-4 h-4 text-[#435CBC]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    </div>
                    <div>
                    <svg className="w-4 h-4 text-[#435CBC] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
</svg>
</div>
<div>
<svg className="w-4 h-4 text-[#435CBC] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>
</div>
                    </div>
        <div className="pt-4 pb-4 rounded-md overflow-hidden">
          <Image
            src={mainImage}
            alt="img2"
            width={900}
            height={100}
            className="rounded-md"
          />
        </div>
        <p className="text-xs mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using `Content here, content here`, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for `lorem ipsum` will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using Content here, `content here`, making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for `lorem ipsum` will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs mt-5">
          <li>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
          <li>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using `Content here, content
            here`, making it look like readable English.
          </li>
          <li>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for `lorem ipsum`
            will uncover many web sites still in their infancy.
          </li>
          <li>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </li>
          <li>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
          <li>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using `Content here, content
            here`, making it look like readable English.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-4 mb-4">
          Angetrieben von Leidenschaft: Die Geschichten, die definieren
        </h2>
        <p className="text-xs mt-2">
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using `Content here, content here`, making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for `lorem ipsum`` will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs mt-5 mb-6">
  <li>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.
  </li>
  <li>
    The point of using Lorem Ipsum is that it has a more-or-less normal
    distribution of letters, as opposed to using `Content here, content here`,
    making it look like readable English.
  </li>
  <li>
    Many desktop publishing packages and web page editors now use Lorem Ipsum
    as their default model text, and a search for `lorem ipsum` will uncover
    many web sites still in their infancy.
  </li>
  <li>
    Various versions have evolved over the years, sometimes by accident,
    sometimes on purpose (injected humour and the like).
  </li>
  <li>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.
  </li>
  <li>
    The point of using Lorem Ipsum is that it has a more-or-less normal
    distribution of letters, as opposed to using `Content here, content here``,
    making it look like readable English.
  </li>
</ul>

      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        
                <h2 className="m-5 text-2xl font-bold text-center">Weitere Blogs anzeigen</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {blogDetailsData.map((item) => (
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
      <Footer />
    </>
  );
}
