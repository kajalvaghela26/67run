'use client';
import Link from 'next/link';
import { posts } from './postData';

export default function TablePage() {

  return (
    <div className="p-10">
      <table className="table-fixed border-separate border-spacing-x-4  border-spacing-y-2 w-full">
        <thead className='mb-7'>
    <tr>
      <th className="border border-[#DADADA] text-gray-400 mb-10 px-2 rounded-sm p-2">Datum</th>
      <th className="w-80 border border-[#DADADA] text-gray-400 mb-10 px-2 rounded-sm p-2">Name des Laufs</th>
      <th className=" w-30 border border-[#DADADA] text-gray-400 mb-10 px-2 rounded-sm p-2">Symbol</th>
      <th className=" w-40 border border-[#DADADA] text-gray-400 mb-10 px-2 rounded-sm p-2">Symbol (Distanz)</th>
      <th className="border border-[#DADADA] text-gray-400 mb-10 px-2 rounded-sm p-2">Land</th>
      <th className=" p-2 text-white rounded-sm mb-10 px-2 bg-[#435CBC]">Suchen</th>
    </tr>
  </thead>
        <tbody >
          {posts.map(post => (
            <tr key={post.id} className="text-center">
              <td className=" bg-[#EDEDED] rounded-sm px-4 py-2 ">{post.date}</td>
              <td className=" bg-[#EDEDED] rounded-sm  px-4 py-2">{post.name}</td>
              <td className=" bg-[#EDEDED] rounded-sm  px-4 py-2">{post.symbol}</td>
              <td className=" bg-[#EDEDED] rounded-sm  px-4 py-2">{post.price}</td>
              <td className=" bg-[#EDEDED] rounded-sm  px-4 py-2">{post.land}</td>
              <td className=" bg-[#435CBC] text-center rounded hover:bg-blue-600 ">
  <Link
    className=" text-white   "
    href={`/details/${post.id}`}
  >
    Jetzt buchen
  </Link>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
