"use server";

import Footer from "@/app/footer";
import Header from "@/app/hader";
import ImageComponent from "@/app/image";
import { posts } from "@/app/postData";

import { notFound } from "next/navigation";

interface Post {
  id: number;
  date: string;
  name: string;
  symbol: string;
  price: string;
  land: string;
  startDate: string;
}

async function getPost(id: string): Promise<Post | null> {
  return posts.find((post) => post.id.toString() === id) || null;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <ImageComponent
        imgurl={"/images/image1.jpg"}
        headerLabel={post.name}
        bottomLabel={""}
      />
      <div className="flex items-center justify-between  p-4 rounded-md">
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
            />
          </svg>
          <span className="text-gray-800 font-medium">{post.date}</span>|
          <svg
            className="w-6 h-6  text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span className="text-gray-800 font-medium">Runner Meet</span>
        </div>

        {/* Right: Button */}
        <button className="bg-[#435CBC] text-white px-4 py-2 rounded hover:bg-blue-600">
          Login To Buy Now
        </button>
      </div>
      <div className="p-6">
  <h1 className="text-xl font-bold mb-4">{post.name}</h1>
  <p><span className="text-gray-600 font-medium">Event Start Date:</span> {post.date}</p>
  <p><span className="text-gray-600 font-medium">Event Location:</span> {post.land}</p>
  <p><span className="text-gray-600 font-medium">Event Start Time:</span> {post.startDate}</p>
  <p><span className="text-gray-600 font-medium">Event Price:</span> {post.price}</p>
</div>
      <Footer />
    </>
  );
}
