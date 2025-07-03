'use client'
import React, { useState } from 'react'
import { CountriesCrousel } from './CountriesCrousel'

// Import the countries array to sync the name
const countries = [
  {
    flag: '/assets/mx.png',
    logo: '/AgilexLogo.png',
    map: '/assets/mexico.jpg',
    alt: 'México',
  },
  {
    flag: '/assets/us.png',
    logo: '/AgilexLogo.png',
    map: '/assets/usa.png',
    alt: 'Estados Unidos',
  },
  {
    flag: '/assets/co.png',
    logo: '/AgilexLogo.png',
    map: '/assets/colombia.png',
    alt: 'Colombia',
  },
]

export const AlternativeCountries = () => {
  // State to sync with carousel
  const [index, setIndex] = useState(0)

  // Pass index setter to CountriesCrousel for sync (optional, if you want two-way sync)
  return (
    <section className="relative flex flex-col md:grid md:grid-cols-2 py-8 px-4 md:px-12 items-center min-h-[380px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75 saturate-150"
        src="/assets/Agilex_Shipment.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for smoothness */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#bfc3d6]/40 to-[#272F66]/20 z-0 pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-2 md:px-8 py-6 gap-2">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl px-6 py-10 shadow-md min-h-[340px] flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#272F66] mb-2">Países Agilex</h1>
          <h3 className="text-lg md:text-xl text-[#272F66] opacity-80 mb-1">Todo al alcance de tu mano</h3>
          <span className="text-2xl md:text-3xl font-bold text-[#272F66] mb-4 block">
            {countries[index].alt}
          </span>
          <button className="mt-2 px-8 py-3 rounded-xl bg-[#fbaf19] text-[#272F66] font-bold text-2xl shadow-lg hover:bg-[#ffd36a] transition">
            Conoce más
          </button>
        </div>
      </div>
      <div className="relative z-10 flex w-full h-full justify-center items-center">
        <CountriesCrousel
          index={index}
          setIndex={setIndex}
        />
      </div>
    </section>
  )
}