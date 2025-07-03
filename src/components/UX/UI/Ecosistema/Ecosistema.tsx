import React from 'react'
import { EcosistemaBentoGrid } from './EcosistemaBentoGrid'
import Image from 'next/image'

export const Ecosistema = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-3 w-full min-h-[600px] my-3 mx-2 p-3 gap-3">
      <div className="flex items-center justify-center w-full h-full lg:col-span-1">
        <Image
          alt="environment"
          src={'/assets/Ecosistema.png'}
          height={400}
          width={400}
          className="object-contain max-w-full max-h-[400px]"
        />
      </div>
      <div className="flex w-full h-full lg:col-span-2">
        <EcosistemaBentoGrid />
      </div>
    </section>
  )
}