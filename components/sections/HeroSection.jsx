// 🏠 HeroSection - Sección principal/portada

import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { weddingData } from '../../data/weddingData'
import { getOverlayStyle } from '@/utils/overlay'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { getAnimationConfig } from '@/data/animationConfig'

export default function HeroSection() {
  const { couple, wedding, styling } = weddingData
  const { heroSection } = styling
  
  // Solo usar animación de background para el Hero, no scroll animations
  const animationConfig = getAnimationConfig('reception')
  const { ref: sectionRef, style: animationStyle } = useScrollAnimation(
    animationConfig.options,
    'background', // Solo animar el background
    0, // Sin delay
    false // No carga inmediata para el background
  )

  return (
    <div
    style={{
      backgroundImage: `url('/images/marco3.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}
    >
    <section 
      ref={sectionRef}
      style={{
        //border:'2px solid #000',
        backgroundImage: `url('/images/novios1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        ...animationStyle
      }}
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      {/* Overlay configurable */}
      <div 
        style={getOverlayStyle(heroSection)}
        className="absolute inset-0 z-0"
      ></div>

      
      
      {/* Contenido principal - Usar solo animación CSS, no scroll-based */}
      <div 
        style={{
          animation: 'entrada1 2s ease 0s 1 normal forwards',
          willChange: 'transform, opacity' // Optimización para móviles
        }}
        className="bg-slate-300 bg-opacity-60 p-6 rounded-2xl relative z-10 text-center space-y-6 px-4"
      >
        <h1 className="font-script text-6xl md:text-8xl text-foreground mb-4">
          {wedding.title.split(' ').map((word, index) => (
            <span key={index}>
              {index === 1 ? <span className="italic">{word}</span> : word}
              {index < wedding.title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h1>

        <div 
        style={{display:'none'}}
        className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <Image
            src={couple.mainImage}
            alt={`${couple.bride} y ${couple.groom}`}
            fill
            className="object-cover"
            priority
            sizes="320px"
          />
        </div>

        <div className="space-y-2">
          <div className="text-6xl text-secondary font-script">
            {couple.initials}
          </div>
          <h2 className="font-script text-4xl text-foreground">
            {couple.bride} y {couple.groom}
          </h2>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <Heart className="w-8 h-8 text-secondary" />
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>

        <p className="text-lg text-muted-foreground italic max-w-md mx-auto">
          &ldquo;{couple.quote}&rdquo;
        </p>
      </div>
    </section>
    </div>
  )
}
