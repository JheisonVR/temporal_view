import React from 'react'
import InteractiveGlobe from './InteractiveGlobe'

export const Hero = () => {
  return (
    <div 
    // className='grid md:grid-cols-2 gap-x-8 items-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-16 text-white selection:bg-sky-500 selection:text-white'
    className='grid md:grid-cols-3 gap-x-8 items-center min-h-screen bg-[#E5EBF2] p-8 md:p-16 text-white selection:bg-sky-500 selection:text-white'
    >
        {/* Left Column: Text content and CTA */}
        <div className="flex flex-col justify-center col-span-1 space-y-10 py-8">
            {/* Text block */}
            <div className='flex flex-col space-y-4'>
                <p 
                //className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-300 leading-tight drop-shadow-md'
                className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 leading-tight drop-shadow-md'
                >
                    Conectamos tus envíos al mundo:
                </p>
                <p 
                //className='text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light'
                className='text-4xl sm:text-2xl lg:text-6xl text-indigo-800 font-light'
                >
                    productos, documentos o compras,
                </p>
                <p 
                //className='text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 leading-tight drop-shadow-sm'
                className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-900 leading-tight drop-shadow-md'
                >
                    todo en un solo ecosistema.
                </p>
            </div>
            {/* CTA Button */}
            <div className='flex pt-4'>
                <button className='rounded-lg bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-indigo-950 font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75'>
                    Conoce más
                </button>
            </div>
            {/* Social Media Logos */}
            <div className='flex items-center space-x-6 pt-8'>
                {/* YouTube */}
                <a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.5C6.75,4.5,2.438,8.813,2.438,14.063S6.75,23.625,12,23.625c5.25,0,9.563-4.313,9.563-9.563S17.25,4.5,12.001,4.5z M12,19.5c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5s5.5,2.468,5.5,5.5S15.033,19.5,12,19.5z M10,9.5v9l6-4.5L10,9.5z M21.938,3.375C20.125,1.563,17.063,0.375,12,0.375S3.875,1.563,2.063,3.375C0.25,5.188-0.375,8.25-0.375,12s0.625,6.813,2.438,8.625c1.813,1.813,4.875,3,9.938,3s8.125-1.188,9.938-3c1.813-1.813,2.438-4.875,2.438-8.625S23.75,5.188,21.938,3.375z M12,21.625c-4.208,0-7.625-3.417-7.625-7.625S7.792,6.375,12,6.375s7.625,3.417,7.625,7.625S16.208,21.625,12,21.625z"/>
                    </svg>
                </a>
                {/* Instagram */}
                <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-pink-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </a>
                {/* TikTok */}
                <a href="YOUR_TIKTOK_LINK" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 0 .17.01.23.05.27.17.39.44.41.72.05 1.07.03 2.14-.08 3.21-.04.37-.16.72-.29 1.07l-.03.09c-.22.7-.47 1.39-.73 2.07-.06.15-.11.31-.18.46-.13.3-.29.58-.42.89-.17.37-.34.74-.53 1.11-.02.05-.03.09-.05.14l-.03.09c-.25.68-.53 1.35-.83 2.01-.19.42-.39.83-.61 1.24-.1.18-.2.36-.31.53l-.03.06c-.22.44-.46.88-.71 1.31-.02.04-.04.07-.06.11-.23.41-.48.82-.73 1.22-.18.3-.37.6-.57.89l-.02.03c-.23.34-.47.67-.72.99-.08.1-.17.2-.25.29-.28.31-.58.61-.9.89l-.02.02c-.3.27-.62.52-.95.76-.17.12-.35.24-.53.35-.32.2-.65.39-1 .56-.21.1-.43.19-.65.27l-.02.01c-.6.19-1.2.32-1.82.41-.32.05-.64.08-1 .11-.19.02-.38.03-.57.04-.32.01-.65.01-1 .01l-.01-.01c-1.31.02-2.61.01-3.91.02-.08 0-.17-.01-.23-.05-.27-.17-.39-.44-.41-.72-.05-1.07-.03-2.14.08-3.21.04-.37.16-.72.29-1.07l.03-.09c.22-.7.47-1.39.73-2.07.06-.15.11-.31.18-.46.13-.3.29-.58.42-.89.17-.37.34-.74.53-1.11.02-.05.03-.09.05-.14l.03-.09c.25-.68.53-1.35.83-2.01.19-.42.39-.83.61-1.24.1-.18.2-.36.31-.53l.03-.06c.22-.44.46-.88.71-1.31.02-.04.04-.07.06-.11.23-.41.48-.82.73-1.22.18-.3.37-.6-.57-.89l.02-.03c.23-.34.47-.67.72-.99.08-.1.17-.2.25-.29.28-.31.58-.61.9-.89l.02-.02c.3-.27.62-.52.95-.76.17-.12.35-.24.53-.35.32-.2.65-.39-1 .56.21-.1.43-.19.65-.27l.02-.01c.6-.19-1.2-.32-1.82-.41.32-.05.64-.08-1-.11.19-.02.38-.03.57-.04.32-.01.65-.01-1-.01H12.525zM10.725 15.025c.415 0 .83.01 1.245.02.03 0 .07.01.1.02.17.08.28.21.32.38.07.39.07.78.02 1.17-.02.18-.06.35-.1.52l-.01.03c-.1.34-.22.67-.35.99-.04.1-.08.2-.13.29-.12.29-.26.56-.4.83-.07.13-.15.26-.22.39l-.01.02c-.15.28-.32.55-.49.81-.05.08-.1.15-.15.23-.16.26-.33.52-.51.76-.09.12-.18.24-.28.35l-.01.01c-.18.22-.38.43-.58.63-.1.1-.2.2-.31.29-.19.17-.39.33-.6.48-.11.08-.22.15-.33.22l-.01.01c-.22.14-.45.27-.68.39-.12.06-.24.12-.36.17-.23.1-.47.19-.71.27l-.01.01c-.24.07-.48.13-.72.18-.13.03-.26.05-.39.07-.24.04-.48.06-.73.08l-.01.01c-.41.02-.83.02-1.24.02h-.02c-.415 0-.83-.01-1.245-.02-.03 0-.07-.01-.1-.02-.17-.08-.28-.21-.32-.38-.07-.39-.07-.78-.02-1.17.02-.18.06-.35.1-.52l.01-.03c.1-.34.22-.67.35-.99.04-.1.08-.2.13-.29.12-.29.26-.56.4-.83.07-.13.15-.26.22-.39l.01-.02c.15-.28.32-.55.49-.81.05-.08.1-.15.15-.23.16-.26.33-.52.51-.76.09-.12.18-.24.28-.35l.01-.01c.18-.22.38-.43.58-.63.1-.1.2-.2.31-.29.19-.17.39-.33.6-.48.11-.08.22-.15.33-.22l.01-.01c.22-.14.45-.27.68-.39.12-.06.24-.12.36-.17.23-.1.47-.19.71-.27l.01-.01c.24-.07.48-.13.72-.18.13-.03.26-.05.39-.07.24-.04.48-.06.73-.08l.01-.01c.41-.02.83-.02 1.24-.02h.02z"/>
                    </svg>
                </a>
                {/* Facebook */}
                <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.04 7.64h-1.692c-.502 0-.938.21-.938.78v1.037h2.568l-.332 2.055h-2.236V19H9.86v-7.488H7.64V9.467h2.22V8.03c0-1.62.816-2.904 2.903-2.904h2.278v2.514z"/>
                    </svg>
                </a>
            </div>
        </div>

        {/* Right Column: Interactive Globe */}
        <div 
            className='col-span-2 flex items-center justify-center md:h-full py-8 md:py-0'
            >
            {/* Container to highlight and frame the globe */}
            <div 
                //className="w-full max-w-xl lg:max-w-2xl aspect-[1/1] p-3 sm:p-4 bg-slate-700/20 rounded-3xl shadow-2xl shadow-sky-500/20 backdrop-blur-sm border border-slate-700"
                className="w-full max-w-xl lg:max-w-2xl aspect-[1/1] p-1 sm:p-4 rounded-3xl shadow-2xl shadow-sky-500/20 backdrop-blur-sm "
            >
                 <InteractiveGlobe/>
            </div>
        </div>
    </div>
  )
}