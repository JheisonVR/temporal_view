'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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

export const CountriesCrousel = () => {
  const [index, setIndex] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % countries.length)
  const prev = () => setIndex((prev) => (prev - 1 + countries.length) % countries.length)

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* iPhone-like mobile container */}
      <div
        className="relative w-[320px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-between pt-8 pb-8 px-4 border-[6px] border-[#e5e7eb] overflow-hidden"
        style={{
          boxShadow: '0 8px 32px 0 rgba(60,60,80,0.25), 0 1.5px 8px 0 rgba(60,60,80,0.10)'
        }}
      >
        {/* Speaker and camera details */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-20 h-2 rounded-full bg-gray-300 mb-1" />
          <div className="w-4 h-4 rounded-full bg-gray-400" />
        </div>
        {/* Carousel */}
        <div className="flex flex-col items-center justify-between w-full h-full">
          {/* Flag */}
          <div className="flex justify-center mt-8 mb-6">
            <Image
              src={countries[index].flag}
              alt={`Bandera de ${countries[index].alt}`}
              width={56}
              height={36}
              className="rounded shadow"
            />
          </div>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={countries[index].logo}
              alt={`Logo ${countries[index].alt}`}
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
          {/* Map */}
          <div className="flex-1 flex items-center justify-center mb-8">
            <Image
              src={countries[index].map}
              alt={`Mapa de ${countries[index].alt}`}
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
        {/* Carousel controls */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8">
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow transition"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow transition"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
        {/* iPhone home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-gray-300 opacity-80" />
      </div>
    </div>
  )
}