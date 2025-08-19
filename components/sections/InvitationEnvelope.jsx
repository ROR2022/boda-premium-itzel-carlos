"use client"

import { useState } from "react"

export default function EnvelopeOpening({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      setIsOpened(true)
      setTimeout(() => {
        onOpen()
      }, 800)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-slate-300 flex items-center justify-center z-50">
      <div className="relative">
        {/* Envelope Base */}
        <div
          className={`relative w-80 h-56 transition-all duration-1000 ${
            isOpening ? "transform scale-110" : ""
          } ${isOpened ? "opacity-0" : "opacity-100"}`}
        >
          {/* Envelope Body - Pergamino */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 shadow-2xl border border-amber-200"
               style={{
                 borderRadius: '12px 8px 10px 6px',
                 boxShadow: `
                   0 25px 50px -12px rgba(120, 53, 15, 0.4),
                   inset 0 1px 0 rgba(255, 255, 255, 0.3),
                   inset 0 -1px 0 rgba(180, 83, 9, 0.2),
                   3px 3px 8px rgba(120, 53, 15, 0.3),
                   -2px -2px 6px rgba(255, 255, 255, 0.1)
                 `,
                 backgroundImage: `
                   radial-gradient(circle at 20% 30%, rgba(180, 83, 9, 0.1) 1px, transparent 1px),
                   radial-gradient(circle at 80% 70%, rgba(120, 53, 15, 0.08) 1px, transparent 1px),
                   radial-gradient(circle at 60% 90%, rgba(217, 119, 6, 0.05) 2px, transparent 2px),
                   linear-gradient(45deg, rgba(251, 191, 36, 0.03) 25%, transparent 25%),
                   linear-gradient(-45deg, rgba(180, 83, 9, 0.02) 25%, transparent 25%)
                 `
               }}>
            
            {/* Textura de pergamino envejecido */}
            <div className="absolute inset-0 opacity-40"
                 style={{
                   borderRadius: '12px 8px 10px 6px',
                   backgroundImage: `
                     radial-gradient(circle at 15% 25%, rgba(120, 53, 15, 0.15) 0%, transparent 3%),
                     radial-gradient(circle at 85% 15%, rgba(180, 83, 9, 0.12) 0%, transparent 4%),
                     radial-gradient(circle at 25% 80%, rgba(217, 119, 6, 0.1) 0%, transparent 2%),
                     radial-gradient(circle at 90% 85%, rgba(120, 53, 15, 0.08) 0%, transparent 3%)
                   `
                 }} />

            {/* Envelope Flap - Estilo pergamino */}
            <div
              className={`absolute -top-0 left-0 right-0 h-32 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-200 transition-transform duration-1000 origin-top border-b border-amber-300 ${
                isOpening ? "transform -rotate-180" : ""
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 52% 98%, 48% 98%)",
                boxShadow: `
                  inset 0 -2px 4px rgba(180, 83, 9, 0.2),
                  0 4px 8px rgba(120, 53, 15, 0.3)
                `,
                backgroundImage: `
                  linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 30% 40%, rgba(180, 83, 9, 0.08) 0%, transparent 3%)
                `
              }}
            />

            {/* Envelope Back Flap */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100"
                 style={{ borderRadius: '12px 8px 10px 6px' }} />
          </div>

          {/* Wax Seal Medieval - Sello de cera realista */}
          <div
            className={`absolute top-16 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              isOpening ? "animate-pulse" : ""
            }`}
            onClick={handleOpen}
          >
            {/* Gotas de cera derretida alrededor */}
            <div className="absolute -inset-4">
              <div className="absolute top-8 -left-2 w-3 h-4 bg-gradient-to-b from-red-700 to-red-900 rounded-full opacity-80"
                   style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }} />
              <div className="absolute top-12 right-0 w-2 h-3 bg-gradient-to-b from-red-600 to-red-800 rounded-full opacity-70"
                   style={{ clipPath: 'ellipse(80% 100% at 50% 0%)' }} />
              <div className="absolute bottom-6 -left-1 w-2 h-2 bg-red-800 rounded-full opacity-60" />
              <div className="absolute bottom-8 right-1 w-1 h-2 bg-red-900 rounded-full opacity-50" />
            </div>

            {/* Seal Shadow - Sombra más dramática */}
            <div className="absolute inset-0 bg-red-900/50 rounded-full blur-lg transform translate-y-3 scale-125" />
            <div className="absolute inset-0 bg-red-800/30 rounded-full blur-xl transform translate-y-4 scale-140" />

            {/* Main Seal - Forma irregular de cera */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 via-red-700 to-red-900 shadow-2xl border-2 border-red-800"
                 style={{
                   borderRadius: '45% 50% 48% 52%',
                   boxShadow: `
                     0 8px 25px rgba(127, 29, 29, 0.6),
                     inset 0 2px 4px rgba(255, 255, 255, 0.1),
                     inset 0 -3px 6px rgba(127, 29, 29, 0.8),
                     inset 2px 2px 4px rgba(185, 28, 28, 0.3),
                     inset -2px -2px 4px rgba(127, 29, 29, 0.5)
                   `
                 }}>
              
              {/* Textura de cera con múltiples capas */}
              <div className="absolute inset-1 bg-gradient-to-br from-red-500 via-red-600 to-red-800 opacity-90"
                   style={{ borderRadius: '45% 50% 48% 52%' }} />
              
              {/* Anillo decorativo exterior */}
              <div className="absolute inset-0 rounded-full border border-red-400/30"
                   style={{ borderRadius: '45% 50% 48% 52%' }} />
              
              {/* Textura rugosa de cera */}
              <div className="absolute inset-0 opacity-20"
                   style={{
                     borderRadius: '45% 50% 48% 52%',
                     backgroundImage: `
                       radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                       radial-gradient(circle at 70% 60%, rgba(127, 29, 29, 0.4) 1px, transparent 1px),
                       radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0.5px, transparent 0.5px)
                     `
                   }} />

              {/* Monograma I & C */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-amber-100 font-serif text-lg font-bold tracking-wider leading-none"
                       style={{
                         textShadow: `
                           0 1px 2px rgba(127, 29, 29, 0.8),
                           0 0 4px rgba(255, 255, 255, 0.3)
                         `,
                         fontFamily: 'Playfair Display, serif'
                       }}>
                    I & C
                  </div>
                  {/* Línea decorativa debajo del monograma */}
                  <div className="w-8 h-0.5 bg-amber-200/60 mx-auto mt-0.5 rounded-full" />
                </div>
              </div>

              {/* Brillo sutil de cera */}
              <div className="absolute top-2 left-3 w-3 h-2 bg-red-300/40 rounded-full blur-sm" />
              <div className="absolute top-4 right-2 w-2 h-1 bg-red-400/30 rounded-full blur-sm" />
            </div>

            {/* Efecto de presión alrededor del sello */}
            <div className="absolute -inset-2 border border-amber-600/20 rounded-full opacity-60" />
          </div>

          {/* Ornamentos medievales decorativos */}
          <div className="absolute top-2 left-2 text-amber-600/60">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14 8L20 6L16 12L20 18L14 16L12 22L10 16L4 18L8 12L4 6L10 8L12 2Z" 
                    fill="currentColor" opacity="0.7"/>
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>
          
          <div className="absolute top-2 right-2 text-amber-600/60">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 5 18 5C18 5 15 8 12 8C12 8 9 5 6 5C6 5 9 8 12 8V2Z" 
                    fill="currentColor" opacity="0.6"/>
              <path d="M12 22C12 22 15 19 18 19C18 19 15 16 12 16C12 16 9 19 6 19C6 19 9 16 12 16V22Z" 
                    fill="currentColor" opacity="0.6"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            </svg>
          </div>

          <div className="absolute bottom-2 left-2 text-amber-600/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" 
                    fill="currentColor" opacity="0.6"/>
            </svg>
          </div>

          <div className="absolute bottom-2 right-2 text-amber-600/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>

          {/* Bordes decorativos del pergamino */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ borderRadius: '12px 8px 10px 6px' }}>
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
            <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
          </div>
        </div>

        {/* Opening Animation Overlay */}
        {isOpening && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-amber-400 border-t-transparent rounded-full animate-spin opacity-80" />
            <div className="absolute w-24 h-24 border-2 border-red-600 border-b-transparent rounded-full animate-spin animate-reverse opacity-60" />
          </div>
        )}
      </div>

      {/* Background Medieval Atmosphere */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/15 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-red-400/20 rounded-full blur-xl animate-pulse" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-yellow-400/15 rounded-full blur-2xl animate-pulse" 
           style={{ animationDelay: '0.5s' }} />
      
      {/* Partículas flotantes de pergamino */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-300/40 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-orange-200/50 rounded-full animate-float" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-yellow-200/30 rounded-full animate-float" 
             style={{ animationDelay: '1s', animationDuration: '6s' }} />
      </div>

      {/* Iluminación de velas en los bordes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-reverse {
          animation: reverse 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
