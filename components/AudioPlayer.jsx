// 🎵 AudioPlayer Component - Reproductor visual fijo con animaciones

"use client"

import { Play, Pause, Volume2 } from 'lucide-react'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'
import { weddingData } from '@/data/weddingData'

/**
 * Componente de reproductor de audio con posición fija
 * Características:
 * - Posición fija en bottom-right
 * - Botón circular con animaciones sutiles
 * - Control de play/pause únicamente
 * - Diseño responsivo
 */
export default function AudioPlayer() {
  const {
    isPlaying,
    isLoading,
    error,
    toggle,
    progress
  } = useAudioPlayer(weddingData.audio)

  // Si hay error crítico, no mostrar el reproductor
  if (error && !weddingData.audio?.src) {
    return null
  }

  return (
    <div className="fixed bottom-10 right-10 z-50 group bg-slate-500 rounded-xl p-1">
      {/* Contenedor principal con animaciones */}
      <div className="relative">
        
        {/* Anillo de progreso */}
        <div className="absolute inset-0 w-14 h-14">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 24 24">
            {/* Círculo de fondo */}
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/20"
            />
            {/* Círculo de progreso */}
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-wedding-gold transition-all duration-300"
              style={{
                strokeDasharray: `${2 * Math.PI * 10}`,
                strokeDashoffset: `${2 * Math.PI * 10 * (1 - progress)}`,
              }}
            />
          </svg>
        </div>

        {/* Botón principal */}
        <button
          onClick={toggle}
          disabled={isLoading}
          className={`
            relative w-14 h-14 
            bg-gradient-to-br from-wedding-sage to-wedding-sage-dark
            hover:from-wedding-sage-dark hover:to-wedding-sage
            text-white rounded-full
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 ease-out
            hover:scale-110 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            ${isPlaying ? 'animate-pulse' : ''}
            border-2 border-white/20 hover:border-white/40
          `}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {/* Overlay para efectos visuales */}
          <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icono principal */}
          <div className="relative z-10 flex items-center justify-center">
            {isLoading ? (
              // Spinner de carga
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isPlaying ? (
              // Icono de pausa con animación
              <Pause 
                size={20} 
                className="transform transition-transform duration-200 group-hover:scale-110" 
              />
            ) : (
              // Icono de play con ligero offset visual
              <Play 
                size={20} 
                className="ml-0.5 transform transition-transform duration-200 group-hover:scale-110" 
              />
            )}
          </div>

          {/* Efecto de onda cuando está reproduciendo */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-wedding-gold/50 animate-ping" />
          )}
        </button>

        {/* Tooltip informativo */}
        <div className={`
          absolute bottom-full right-0 mb-2 px-3 py-1.5
          bg-black/80 text-white text-xs rounded-lg
          opacity-0 group-hover:opacity-100
          transform translate-y-1 group-hover:translate-y-0
          transition-all duration-200 ease-out
          pointer-events-none whitespace-nowrap
          ${isPlaying ? 'text-wedding-gold' : ''}
        `}>
          {isLoading ? 'Cargando...' : 
           error ? 'Error de audio' :
           isPlaying ? 'Pausar música' : 'Reproducir música'}
          
          {/* Flecha del tooltip */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-black/80" />
        </div>

        {/* Indicador de error (si existe pero no es crítico) */}
        {error && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse" />
        )}
      </div>

      {/* Versión móvil optimizada */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group {
            bottom: 1rem;
            right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .group button {
            width: 3rem;
            height: 3rem;
          }
          
          .group svg {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>
    </div>
  )
}
