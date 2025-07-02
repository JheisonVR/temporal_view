'use client'
import React, { useState } from "react";

const sections = [
  {
    title: "Define tu envío",
    content: "Contenido de la sección 1. Aquí puedes colocar cualquier información relevante.",
  },
  {
    title: "Planea la ruta",
    content: "Contenido de la sección 2. Aquí puedes colocar cualquier información relevante.",
  },
  {
    title: "Calcula el costo",
    content: "Contenido de la sección 3. Aquí puedes colocar cualquier información relevante.",
  },
  {
    title: "Proyecta tus metas",
    content: "Contenido de la sección 4. Aquí puedes colocar cualquier información relevante.",
  },
];

export const CotizadorAccordions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex justify-center items-center">
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="rounded-lg shadow">
            <button
              className="w-full text-lg font-semibold px-6 py-4 text-left flex justify-between items-center focus:outline-none rounded-lg text-white bg-[#575593]"
              onClick={() => toggleSection(idx)}
            >
              <span>{openIndex === idx ? "●" : "○"}</span>
              <span className="mx-auto">{section.title}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 py-8 bg-slate-50 flex items-center justify-center rounded-lg">
                <div className="text-center text-gray-700">{section.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};