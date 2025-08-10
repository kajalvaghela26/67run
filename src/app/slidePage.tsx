'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import image1 from '../Images/slide1.jpg';

const images = [image1, image1, image1];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Text in top left */}
      <div className="absolute bottom-5 left-4 z-20  bg-opacity-50 px-4 py-2 rounded">
        <span className='text-white text-3xl font-bold '>Entdecken Sie den <p>verborgenen Läufer in Ihnen</p> </span>
        <button className="w-30 h-9 bg-[#435CBC] text-white rounded hover:bg-[#FC7BA2] transition">
          Get Started
        </button>
      </div>

      {/* Slider images */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="w-full flex-shrink-0 h-full relative" key={index}>
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
