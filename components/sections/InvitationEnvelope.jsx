"use client"

import { useState } from "react"

export default function EnvelopeOpening({ onOpen = () => {} }) {
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
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 flex items-center justify-center z-[60]">
      <div className="relative">
        {/* Envelope Base */}
        <div
          className={`relative transition-all duration-1000 ${
            isOpening ? "transform scale-110" : ""
          } ${isOpened ? "opacity-0" : "opacity-100"}`}
          style={{ width: "450px", height: "300px" }}
        >
          {/* Envelope Body - Vintage Paper with realistic texture */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, #f4e8d0 0%, #f9f2e3 25%, #f0e2c4 50%, #f5ead8 75%, #f2e5d1 100%)
              `,
              boxShadow: `
                0 25px 50px -12px rgba(92, 69, 49, 0.35),
                inset 0 0 30px rgba(92, 69, 49, 0.08),
                inset 0 2px 4px rgba(255, 255, 255, 0.3),
                inset 0 -2px 4px rgba(92, 69, 49, 0.15)
              `,
            }}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(92, 69, 49, 0.03) 2px, rgba(92, 69, 49, 0.03) 4px),
                  repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(92, 69, 49, 0.03) 2px, rgba(92, 69, 49, 0.03) 4px),
                  radial-gradient(ellipse at 20% 30%, rgba(92, 69, 49, 0.04) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 70%, rgba(92, 69, 49, 0.03) 0%, transparent 50%),
                  radial-gradient(ellipse at 10% 90%, rgba(92, 69, 49, 0.02) 0%, transparent 40%),
                  radial-gradient(ellipse at 90% 10%, rgba(92, 69, 49, 0.02) 0%, transparent 40%)
                `,
                backgroundSize: '8px 8px, 8px 8px, 200px 200px, 250px 250px, 180px 180px, 220px 220px',
              }}
            />

            {/* Envelope flap lines (triangular) */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {/* Top flap line */}
              <line 
                x1="0" y1="0" 
                x2="225" y2="150" 
                stroke="rgba(92, 69, 49, 0.15)" 
                strokeWidth="1"
              />
              <line 
                x1="450" y1="0" 
                x2="225" y2="150" 
                stroke="rgba(92, 69, 49, 0.15)" 
                strokeWidth="1"
              />
              {/* Bottom flap lines */}
              <line 
                x1="0" y1="300" 
                x2="225" y2="150" 
                stroke="rgba(92, 69, 49, 0.12)" 
                strokeWidth="0.5"
                strokeDasharray="2,3"
              />
              <line 
                x1="450" y1="300" 
                x2="225" y2="150" 
                stroke="rgba(92, 69, 49, 0.12)" 
                strokeWidth="0.5"
                strokeDasharray="2,3"
              />
            </svg>

            {/* Age spots and imperfections */}
            <div className="absolute top-8 left-12 w-3 h-3 bg-amber-700/5 rounded-full blur-sm" />
            <div className="absolute top-20 right-16 w-2 h-2 bg-amber-800/4 rounded-full blur-sm" />
            <div className="absolute bottom-12 left-20 w-4 h-3 bg-amber-700/3 rounded-full blur-sm" />
            <div className="absolute bottom-16 right-24 w-2 h-2 bg-amber-800/4 rounded-full blur-sm" />
            <div className="absolute top-32 left-32 w-1 h-1 bg-amber-900/6 rounded-full" />
          </div>

          {/* Top Envelope Flap (opens when clicked) */}
          <div
            className={`absolute left-0 right-0 transition-transform duration-1000 origin-top ${
              isOpening ? "transform rotateX(-180deg)" : ""
            }`}
            style={{
              top: "-1px",
              height: "150px",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: `linear-gradient(135deg, #f6ead6 0%, #f9f2e3 40%, #f0e2c4 60%, #f3e7d5 100%)`,
              boxShadow: `
                inset 0 -3px 6px rgba(92, 69, 49, 0.15),
                0 2px 4px rgba(92, 69, 49, 0.1)
              `,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Flap texture */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(92, 69, 49, 0.02) 3px, rgba(92, 69, 49, 0.02) 6px),
                  radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)
                `,
                backgroundSize: '12px 12px, 100% 100%',
              }}
            />
          </div>
        </div>

        {/* Wax Seal with Couple Silhouette */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-105 ${
            isOpening ? "animate-pulse" : ""
          }`}
          style={{ top: '120px' }}
        >
          {/* Capa clickeable transparente que cubre todo el sello - FUERA de transforms */}
          <div
            className="absolute cursor-pointer"
            onClick={handleOpen}
            style={{
              top: 0,
              left: 0,
              width: "110px",
              height: "110px",
              zIndex: 9999,
              backgroundColor: "transparent"
            }}
            title="Haz clic para abrir la invitación"
          />

          {/* Seal Shadow */}
          <div className="absolute inset-0 bg-red-900/30 rounded-full blur-xl transform translate-y-3 scale-125 pointer-events-none" />

          {/* Main Seal - Irregular wax shape */}
          <div
            className="relative"
            style={{
              width: "110px",
              height: "110px",
              background: `
                radial-gradient(circle at 30% 30%, #dc2626 0%, #b91c1c 40%, #991b1b 70%, #7f1d1d 100%)
              `,
              borderRadius: "47% 53% 48% 52% / 52% 48% 52% 48%",
              boxShadow: `
                0 12px 25px rgba(127, 29, 29, 0.5),
                0 6px 12px rgba(127, 29, 29, 0.4),
                inset 0 -4px 8px rgba(127, 29, 29, 0.6),
                inset 0 2px 4px rgba(255, 255, 255, 0.15),
                inset -2px -2px 6px rgba(127, 29, 29, 0.4)
              `,
              transform: 'rotate(-5deg)'
            }}
          >
            {/* Wax texture and depth */}
            <div
              className="absolute inset-2 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
                  radial-gradient(circle at 60% 60%, #b91c1c 0%, #991b1b 50%)
                `,
                borderRadius: "inherit",
                opacity: 0.8
              }}
            />

            {/* Embossed couple silhouette container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="relative pointer-events-none"
                style={{
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
                  transform: 'rotate(5deg)'
                }}
              >
                {/* Couple silhouette SVG */}
                <svg width="50" height="50" viewBox="0 0 100 100" className="opacity-80 pointer-events-none">
                  {/* Female figure */}
                  <ellipse cx="35" cy="25" rx="8" ry="10" fill="rgba(127, 29, 29, 0.6)" />
                  <path 
                    d="M 35 35 Q 30 40, 28 55 L 32 80 L 38 80 L 42 55 Q 40 40, 35 35"
                    fill="rgba(127, 29, 29, 0.6)"
                  />
                  
                  {/* Male figure */}
                  <circle cx="65" cy="23" r="8" fill="rgba(127, 29, 29, 0.6)" />
                  <path 
                    d="M 65 31 Q 60 35, 58 55 L 62 80 L 68 80 L 72 55 Q 70 35, 65 31"
                    fill="rgba(127, 29, 29, 0.6)"
                  />
                  
                  {/* Heart between them */}
                  <path 
                    d="M 50 45 C 48 42, 44 42, 44 45 C 44 42, 40 42, 38 45 Q 38 50, 44 55 Q 50 50, 50 45 Z"
                    fill="rgba(127, 29, 29, 0.4)"
                    transform="translate(6, -5)"
                  />
                  
                  {/* Holding hands line */}
                  <line 
                    x1="42" y1="50" 
                    x2="58" y2="50" 
                    stroke="rgba(127, 29, 29, 0.5)" 
                    strokeWidth="2"
                  />
                </svg>
                
                {/* Embossed highlight effect */}
                <div 
                  className="absolute top-2 left-3 w-4 h-3 rounded-full opacity-40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)'
                  }}
                />
              </div>
            </div>

            {/* Realistic wax drips */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-8px',
                left: '15px',
                width: '8px',
                height: '14px',
                background: 'linear-gradient(180deg, #b91c1c 0%, #991b1b 60%, #7f1d1d 100%)',
                borderRadius: '40% 60% 80% 20% / 80% 80% 20% 20%',
                opacity: 0.9,
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.3)'
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-5px',
                right: '20px',
                width: '5px',
                height: '9px',
                background: 'linear-gradient(180deg, #dc2626 0%, #b91c1c 70%, #991b1b 100%)',
                borderRadius: '50% 50% 70% 30% / 70% 70% 30% 30%',
                opacity: 0.85,
                transform: 'rotate(8deg)',
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2)'
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-3px',
                left: '45px',
                width: '4px',
                height: '6px',
                background: 'linear-gradient(180deg, #dc2626 0%, #b91c1c 100%)',
                borderRadius: '50% 50% 60% 40% / 60% 60% 40% 40%',
                opacity: 0.8,
                transform: 'rotate(-12deg)'
              }}
            />
          </div>
        </div>

        {/* Click instruction (appears before opening) */}
        {!isOpening && !isOpened && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-amber-800/60 text-sm animate-pulse">
            Haz clic en el sello para abrir
          </div>
        )}
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200/5 rounded-full blur-3xl" />
    </div>
  )
}