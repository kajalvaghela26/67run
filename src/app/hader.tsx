import React from "react";
import Logo from "../Images/Logo1.jpg";
import Image from "next/image";
import Link from "next/link";
export default function Header() {

  return (
    <div className="flex items-center justify-between p-2 pl-4 pr-8  bg-white-800 text-black-800">
      <div className="ml-10">
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </div>

      <ul className="flex flex-col sm:flex-row gap-10 mr-50">
        <li><Link href={'/home'}>Startseite</Link></li>
        <li> <Link href={'/'}>Laufkalender</Link></li>
        <li><Link href={'/about'}>Über uns</Link></li>
        <li> <Link  href={'/societies'} >Vereine</Link></li>
        <li><Link  href={'/organization'} >Für Veranstalter </Link></li>
        <li><Link  href={'/blog'} >Blog </Link></li>
      </ul>
      <div className="flex items-center gap-3">
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
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
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
            d="M21 12c0 4.9706-4.0294 9-9 9m9-9c0-4.97056-4.0294-9-9-9m9 9h-5m-4 9c-4.97056 0-9-4.0294-9-9m9 9v-5m-9-4c0-4.97056 4.02944-9 9-9m-9 9h5m4-9v5M8 3.93552V8m0 0v4m0-4H3.93552M8 8h4m-4 4v4m0-4h4m-4 4v4.0645M8 16H3.93552M8 16h4m0-8v4m0-4h4m-4 4v4m0-4h4m-4 4h4m0-12.06448V8m0 0v4m0-4h4.0645M16 12v4m0 0v4.0645M16 16h4.0645"
          />
        </svg>
        EN
        <button className="w-30 h-9 bg-[#435CBC] text-white rounded hover:bg-[#FC7BA2] transition">
          Login
        </button>
        <button className="w-30 h-9 bg-[#FC7BA2] text-white rounded hover:bg-[#435CBC] transition">
          Registrieren
        </button>
      </div>
    </div>
  );
}
