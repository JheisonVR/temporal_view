"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  {
    name: "Servicio",
    // options: [
    //   {
    //     label: "Single day",
    //     link: "#",
    //   },
    //   {
    //     label: "Seven days",
    //     link: "#",
    //   },
    // ],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-indigo-900 hover:text-amber-500 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
  {
    name: "Sucursales",
    options: [],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-indigo-900 hover:text-amber-500 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
  {
    name: "Mesa de ayuda",
    options: [],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-indigo-900 hover:text-amber-500 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
    {
    name: "Blog",
    options: [],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-indigo-900 hover:text-amber-500 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
];

export const InitialNavbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileIconMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

  return (
    <nav className=" px-80 py-2 flex top-0 bg-slate-50 ">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <Link href="/">
          <Image
            src="/AgilexLogo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-40 hover:rotate-2 duration-500"
          />
        </Link>
        {/* <div className="flex">
          <h3 className="font-extrabold text-indigo-900">ÁGIL</h3>
          <h3 className="font-extrabold text-amber-500 ">EX</h3>
        </div> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className= {`block sm:hidden ml-auto pr-4 my-auto cursor-pointer group ${isMobileMenuOpen ? 'open':''}`}
        id="mobile-menu-button" onClick={handleMobileIconMenu}
      >
        <div className="h-1 w-8 rounded-full bg-indigo-950 group-open:rotate-45 group-open:top-2 relative transition-all duration-100"></div>
        <div className="h-1 w-8 rounded-full bg-indigo-950 mt-1 group-open:opacity-0 transition-all"></div>
        <div className="h-1 w-8 rounded-full bg-indigo-950 mt-1 transition-all group-open:-rotate-45 group-open:-top-2 relative duration-100"></div>
      </button>
      {/* Mobile Menu Content */}
      <div className= {`sm:hidden absolute top-14 bg-slate-50 w-full transition-all rounded-b-lg ${isMobileMenuOpen ? '' : 'hidden'}`} >
        {items.map( (item, i)=>(
            <div key={i} className={item.classname} >
                <Link href={item.url}><span>{item.name}</span></Link>
            </div>
        ) )}
      </div>

      {/* Navbar items */}
      <div className="hidden sm:flex flex-1 items-center justify-end">
        {items.map((item, index) => (
          <div key={index} className={item.classname + " group"}>
            <span>{item.name}</span>
            <div className="group-hover:block hidden absolute top-full right-0 whitespace-nowrap bg-pink-500 rounded-b-md text-right">
              {/* {item.options.length > 0 &&
                item.options.map((op, i) => (
                  <div
                    key={i}
                    className="p-4 font-bold hover:bg-white/5 hover:text-amber-500 text-indigo-900 transition-colors ease-in-out"
                  >
                    <Link href={op.link}>
                      <span>{op.label}</span>
                    </Link>
                  </div>
                ))} */}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
