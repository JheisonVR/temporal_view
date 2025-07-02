'use client'
import React, { useState } from "react";

const projectTypes = [
  "E-commerce",
  "Logística",
  "Exportación",
  "Importación",
  "Otro",
];

const deliveryTimes = [
  "1 semana",
  "2 semanas",
  "1 mes",
  "2 meses",
  "3 meses o más",
];

export const Calculator = () => {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(5000);
  const [deliveryTime, setDeliveryTime] = useState(deliveryTimes[0]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#272F66] text-center mb-2">Cotizador de Soluciones</h2>

      {/* Tipo de proyecto */}
      <div>
        <label className="block text-[#272F66] font-semibold mb-1" htmlFor="tipo-proyecto">
          Tipo de proyecto
        </label>
        <select
          id="tipo-proyecto"
          value={projectType}
          onChange={e => setProjectType(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-[#272F66] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F6B11D] transition"
        >
          {projectTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Presupuesto estimado */}
      <div>
        <label className="block text-[#272F66] font-semibold mb-1" htmlFor="presupuesto">
          Presupuesto estimado
        </label>
        <div className="flex items-center gap-4">
          <input
            id="presupuesto"
            type="range"
            min={1000}
            max={10000}
            step={500}
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
            className="w-full accent-[#F6B11D] h-2 rounded-lg"
            style={{ accentColor: "#F6B11D" }}
          />
          <span className="text-[#272F66] font-semibold min-w-[80px] text-right">
            ${budget}
          </span>
        </div>
      </div>

      {/* Plazo de entrega */}
      <div>
        <label className="block text-[#272F66] font-semibold mb-1" htmlFor="plazo-entrega">
          Plazo de entrega
        </label>
        <select
          id="plazo-entrega"
          value={deliveryTime}
          onChange={e => setDeliveryTime(e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-[#272F66] bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F6B11D] transition"
        >
          {deliveryTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      {/* Siguiente Button */}
      <button
        className="mt-2 w-full bg-[#F6B11D] text-[#272F66] font-bold py-3 rounded-xl shadow hover:bg-[#ffd36a] transition text-lg"
        type="button"
      >
        Siguiente
      </button>
    </div>
  );
};