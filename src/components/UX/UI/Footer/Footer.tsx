import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 text-[#232b39] w-full rounded-b-xl rounded-xl">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/AgilexLogo.png"
              alt="Agilex Logo"
              width={300}
              height={300}
              className="rounded"
            />
          </div>
        </div>
        {/* Footer Links */}
{/* Footer Links */}
<div className="flex flex-1 justify-end gap-12 flex-wrap">
  <div className="group relative">
    <h4 className="font-semibold mb-2 text-indigo-900 cursor-pointer">PAISES</h4>
    <ul className="space-y-1 text-sm absolute left-0 top-full text-amber-500 bg-slate-50 border border-amber-500 rounded shadow-lg py-2 px-4 min-w-[140px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
      <li><a href="#" className="hover:underline">Colombia</a></li>
      <li><a href="#" className="hover:underline">Mexico</a></li>
      <li><a href="#" className="hover:underline">Estados Unidos</a></li>
    </ul>
  </div>
  <div className="group relative">
    <h4 className="font-semibold mb-2 text-indigo-900 cursor-pointer">SERVICIOS</h4>
    <ul className="space-y-1 text-sm absolute left-0 top-full text-amber-500 bg-slate-50 border border-amber-500 rounded shadow-lg py-2 px-4 min-w-[180px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
      <li><a href="#" className="hover:underline">Envios Internacionales</a></li>
      <li><a href="#" className="hover:underline">Recaudo Internacional</a></li>
      <li><a href="#" className="hover:underline">Casillero Internacional</a></li>
      <li><a href="#" className="hover:underline">Fullfilment</a></li>
    </ul>
  </div>
  <div className="group relative">
    <h4 className="font-semibold mb-2 text-indigo-900 cursor-pointer">LEGAL</h4>
    <ul className="space-y-1 text-sm absolute left-0 top-full text-amber-500 bg-slate-50 border border-amber-500 rounded shadow-lg py-2 px-4 min-w-[180px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-20">
      <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
      <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
    </ul>
  </div>
</div>

      </div>
      {/* Bottom line */}
      <div className="border-t border-[#2B2C6C] px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-sm text-indigo-900">© 2025 Agilex™</span>
        <div className="flex gap-4">
            <FaYoutube className='text-indigo-900 hover:text-amber-500' />
            <FaInstagram className='text-indigo-900 hover:text-amber-500' />
            <FaTiktok className='text-indigo-900 hover:text-amber-500' />
            <FaFacebook className='text-indigo-900 hover:text-amber-500' />
        </div>
      </div>
    </footer>
  )
}