// 🎬 useScrollAnimation Hook - Animaciones activadas por scroll

import { useState, useEffect, useRef } from 'react'

/**
 * Hook para activar animaciones cuando el elemento entra en viewport
 * @param {Object} options - Configuración del Intersection Observer
 * @param {string} animationType - Tipo de animación a aplicar
 * @param {number} delay - Delay opcional en ms antes de activar la animación
 * @returns {Object} ref y estado de animación
 */
export const useScrollAnimation = (options = {}, animationType = 'fadeIn', delay = 0) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  // Configuración por defecto del Intersection Observer
  const defaultOptions = {
    threshold: 0.1, // 10% del elemento debe ser visible
    rootMargin: '0px 0px -50px 0px', // Activar un poco antes de que sea completamente visible
    ...options
  }

  useEffect(() => {
    const currentElement = elementRef.current
    if (!currentElement) return

    // Verificar si el usuario prefiere animaciones reducidas
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Aplicar delay si se especifica
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true)
                setHasAnimated(true)
              }, delay)
            } else {
              setIsVisible(true)
              setHasAnimated(true)
            }
          }
        })
      },
      defaultOptions
    )

    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [hasAnimated, delay, defaultOptions.threshold, defaultOptions.rootMargin])

  // Generar estilos de animación basados en el tipo
  const getAnimationStyle = () => {
    if (!isVisible) {
      // Estados iniciales antes de la animación
      switch (animationType) {
        case 'fadeIn':
          return {
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }
        case 'slideUp':
          return {
            opacity: 0,
            transform: 'translateY(50px)',
            transition: 'all 0.6s ease-out'
          }
        case 'slideLeft':
          return {
            opacity: 0,
            transform: 'translateX(50px)',
            transition: 'all 0.7s ease-out'
          }
        case 'slideRight':
          return {
            opacity: 0,
            transform: 'translateX(-50px)',
            transition: 'all 0.7s ease-out'
          }
        case 'zoom':
          return {
            opacity: 0,
            transform: 'scale(0.8)',
            transition: 'all 0.6s ease-out'
          }
        case 'background':
          return {
            backgroundSize: '100%',
            transition: 'background-size 2s ease-out'
          }
        case 'bounce':
          return {
            opacity: 0,
            transform: 'translateY(-30px)',
            transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }
        default:
          return {
            opacity: 0,
            transition: 'opacity 0.6s ease-out'
          }
      }
    } else {
      // Estados finales después de la animación
      switch (animationType) {
        case 'fadeIn':
        case 'slideUp':
        case 'slideLeft':
        case 'slideRight':
        case 'bounce':
          return {
            opacity: 1,
            transform: 'translateY(0) translateX(0)',
            transition: 'all 0.8s ease-out'
          }
        case 'zoom':
          return {
            opacity: 1,
            transform: 'scale(1)',
            transition: 'all 0.6s ease-out'
          }
        case 'background':
          return {
            backgroundSize: '150%',
            transition: 'background-size 2s ease-out'
          }
        default:
          return {
            opacity: 1,
            transition: 'opacity 0.6s ease-out'
          }
      }
    }
  }

  return {
    ref: elementRef,
    isVisible,
    hasAnimated,
    style: getAnimationStyle(),
    // Clases de animación CSS si prefieres usarlas
    className: isVisible ? `animate-${animationType}-visible` : `animate-${animationType}-hidden`
  }
}
