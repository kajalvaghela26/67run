import Image from "next/image";
import React from "react";
import Logo2 from "../Images/Logo2.png";

export default function Footer() {
  return (
    <div className="relative bg-[#273067] text-white overflow-hidden block text-xs pl-10 pr-10">

      <div className="absolute right-0 top-0 h-full w-full pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at right, rgba(240, 102, 144, 0.56) 0%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="items-center gap-3">
            <Image src={Logo2} alt="Logo" height={130} width={130} />
            {/* <span className="font-semibold text-sm">Runnersmeet</span> */}
            <p className="text-xl">
  <span className="bg-gradient-to-r from-[#00BBEB] to-[#FB7BA2] bg-clip-text text-transparent font-semibold">
    Runners meet
  </span>
</p>

          </div>

          <div className=" text-gray-300">
            <ul className="space-y-2">
              <li className="text-white font-bold">Quicklinks</li>
              <li>
                <a href="/about" className="hover:text-white">
                Startseite
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white">
                  Laufkalender
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-white">
                Über uns
                </a>{" "}
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Vereine
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Societies
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Für Veranstalter
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-gray-300">
            <ul className="space-y-2">
              <li className="text-white font-bold">Legal</li>
              <li>
                <a href="/about" className="hover:text-white">
                  Hilfezentrum
                </a>
              </li>
              <li>
                <a href="/contactAs" className="hover:text-white">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Datenschutzrichtlinie
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Anmeldung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="mb-2 block text-sm font-medium text-white">
              Abonniere den Newsletter
            </span>
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Enter Your Email ...."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-black placeholder-gray-400"
              />

              {/* Arrow Icon (Right Side, Black) */}
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#435CBC]"
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
              </div>
            </div>
               
              <div className="flex items-center gap-2 ml-2 mt-2">
                <div>Follow us: </div>
                <div>
                 <svg className ="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    </div>
                    <div>
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
</svg>
</div>
<div>
<svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>
</div>
                    </div>
          </div>
        </div>

        {/* Bottom Section: Centered Copyright */}
        <div className="text-center text-[10px] sm:text-xs text-gray-400 block mb-0">
          ©2023 Runnersmeet | Designed by Mindpath. All rights reserved | Terms
          & Conditions
        </div>
      </div>
    </div>
  );
}
