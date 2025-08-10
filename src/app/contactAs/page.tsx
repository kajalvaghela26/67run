import React from "react";
import Header from "../hader";
import Footer from "../footer";
import ImageComponentWithCard from "./imageComponentWithCard";

export default function SocietiesPage() {
  return (
    <>
      <Header />

     <div className="mb-12 relative z-10">
  <ImageComponentWithCard
    imgurl="/images/contactAs.jpg"
    headerLabel="Kontaktiere uns"
    bottomLabel="Home - Kontaktiere uns"
  />
</div>

      {/* Contact Form */}
      <h2 className="text-2xl font-bold text-center p-8">Kontaktiere uns</h2>
      <div className="max-w-2xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Vorname</label>
            <input
              type="text"
              placeholder="Jhon"
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nachname</label>
            <input
              placeholder="Deo"
              type="text"
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Telefon Nummer</label>
            <input
              type="text"
              placeholder="+1 647 374 3832"
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-Mail-Adresse</label>
            <input
              placeholder="jhondeo384@gmail.com"
              type="text"
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Nachricht</label>
          <input
            type="text"
            placeholder="Geben Sie hier eine Nachricht ein..."
            className="w-full h-20 p-2 border border-gray-300 bg-gray-100 rounded"
          />
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>

      <Footer />
    </>
  );
}
