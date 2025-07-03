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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

 return (
  <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-stretch gap-8 py-8">
    {/* Pipeline: horizontal on mobile, vertical on sm+ */}
    <div className="flex flex-row sm:flex-col items-center justify-center self-stretch h-full pt-2 w-full sm:w-auto">
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col sm:flex-col items-start justify-center">
          {/* Step circle */}
          <div
            className={`
              flex items-center justify-center w-8 h-8 rounded-full border-2
              ${openIndex === idx
                ? "bg-[#575593] border-[#575593] text-white shadow-lg"
                : idx < (openIndex ?? 0)
                ? "bg-amber-500 border-amber-500 text-white"
                : "bg-gray-200 border-gray-300 text-gray-400"}
              font-bold text-lg transition
            `}
          >
            {idx < (openIndex ?? 0) ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              idx + 1
            )}
          </div>
          {/* Connector line */}
          {idx < sections.length - 1 && (
            <div
              className={`
                ${/* Horizontal on mobile, vertical on sm+ */""}
                sm:w-1 sm:h-10 w-20 h-1
                ${idx < (openIndex ?? 0) ? "bg-amber-500" : "bg-gray-300"}
                mx-auto
              `}
            />
          )}
        </div>
      ))}
    </div>

    {/* Accordion */}
    <div className="flex-1 space-y-4">
      {sections.map((section, idx) => (
        <div key={idx} className="rounded-lg shadow">
          <button
            className={`w-full text-lg font-semibold px-6 py-4 text-left flex justify-between items-center focus:outline-none rounded-lg
              ${openIndex === idx ? "text-white bg-[#575593]" : "text-[#575593] bg-slate-100"}
            `}
            onClick={() => toggleSection(idx)}
          >
            <span className="mx-auto">{section.title}</span>
            <span>{openIndex === idx ? "●" : "○"}</span>
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