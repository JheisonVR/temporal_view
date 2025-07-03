import React from "react";

const cards = [
  {
    title: "Recaudo Internacional",
    bg: "bg-gradient-to-br from-[#f6d365] to-[#fda085]",
    text: "text-[#272F66]",
  },
  {
    title: "",
    bg: "bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb]",
    text: "text-[#272F66]",
  },
  {
    title: "Casillero Internacional",
    bg: "bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]",
    text: "text-[#272F66]",
  },
  {
    title: "Fullfilment",
    bg: "bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]",
    text: "text-[#272F66]",
  },
];

export const EcosistemaBentoGrid = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 grid-rows-5 md:grid-rows-3 gap-4 md:gap-6 p-2 md:p-6">
      {/* Text area */}
      <div className="md:col-span-2 md:row-span-2 row-span-1 flex flex-col justify-center items-start bg-[#e9e7fd] rounded-3xl p-4 md:p-8 shadow-lg overflow-hidden min-h-[100px] md:min-h-0 h-full hover:scale-105 active:scale-100 focus:scale-105 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#272F66] mb-2 md:mb-4 break-words w-full text-wrap truncate">
          Envios Internacionales
        </h2>
        <p className="text-base md:text-lg text-[#272F66] opacity-80 break-words w-full">
          Descubre nuestros servicios para potenciar tu negocio globalmente con soluciones integrales 
        </p>
      </div>
      {/* Cards */}
      {cards.map((card, idx) => (
        <div
          key={card.title}
          className={`
            group relative flex flex-col justify-center items-center rounded-3xl shadow-lg cursor-pointer transition-all duration-300
            ${card.bg} ${card.text}
            ${idx === 0 ? "md:col-start-3 md:row-start-1 md:row-span-1" : ""}
            ${idx === 1 ? "md:col-start-4 md:row-start-1 md:row-span-2 hidden" : ""}
            ${idx === 2 ? "md:col-start-3 md:row-start-2 md:row-span-2" : ""}
            ${idx === 3 ? "md:col-start-1 md:row-start-3 md:col-span-2" : ""}
            min-h-[80px] md:min-h-0 h-full w-full p-4 md:p-6 overflow-hidden
            hover:scale-105 active:scale-100 focus:scale-105
          `}
          style={{
            boxShadow: "0 4px 24px 0 rgba(39,47,102,0.08)",
          }}
          tabIndex={0}
        >
          <span
            className="text-lg md:text-2xl font-bold transition-transform duration-300 break-words w-full text-center "
          >
            {card.title}
          </span>
          {/* Animated background effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.25) 0%, transparent 70%)"
            }}
          />
        </div>
      ))}
    </div>
  );
};