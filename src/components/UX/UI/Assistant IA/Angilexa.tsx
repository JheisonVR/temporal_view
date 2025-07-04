import Image from 'next/image'
import React from 'react'

export const Angilexa = () => {
  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4 py-10 flex flex-col md:flex-row items-center gap-8">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center  bg-white/10 rounded-xl min-h-[480px] p-3 items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">
          Conoce a Angilex
        </h1>
        <p className="text-lg md:text-xl text-[#232b39] opacity-90 mb-6">
          Angilex es nuestra asistente virtual que te ayudará con tus servicios y consultas de manera eficiente y dinámica.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={'/assets/Angilex.png'}
          alt='virtual assistant'
          height={340}
          width={340}
          className="object-contain rounded-2xl shadow-md "
        />
      </div>
    </section>
  )
}