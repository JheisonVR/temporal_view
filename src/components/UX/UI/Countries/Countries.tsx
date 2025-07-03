import React from 'react'
import { CountriesCrousel } from './CountriesCrousel'

export const Countries = () => {
  return (
    <section className="relative flex flex-col md:grid md:grid-cols-2 py-8 px-4 md:px-12 items-center min-h-[380px]">
      {/* Diagonal Blur effect */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-full h-full rounded-3xl blur-2xl opacity-70 z-0"
        style={{
          background: "linear-gradient(120deg, #fff 5%, #bfc3d6 60%, #e6e7f2 100%)",
          maskImage: "linear-gradient(120deg, transparent 0%, #fff 20%, #fff 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(120deg, transparent 0%, #fff 20%, #fff 80%, transparent 100%)"
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-2 md:px-8 py-6 gap-2">
        <div className="bg-white/30 rounded-2xl px-6 py-6 shadow-md">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#272F66] mb-2">Países Agilex</h1>
          <h3 className="text-lg md:text-xl text-[#272F66] opacity-80 mb-1">Todo al alcance de tu mano</h3>
          <button className="mt-2 px-8 py-3 rounded-xl bg-[#fbaf19] text-[#272F66] font-bold text-2xl shadow-lg hover:bg-[#ffd36a] transition">
            Conoce más
          </button>
        </div>
      </div>
      <div className="relative z-10 flex w-full h-full justify-center items-center">
        <CountriesCrousel />
      </div>
    </section>
  )
}