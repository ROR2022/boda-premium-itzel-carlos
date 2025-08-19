// 🎵 useAudioPlayer Hook - Control de audio con rango de tiempo específico

import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Hook personalizado para manejar reproducción de audio con tiempo específico
 * @param {Object} audioConfig - Configuración del audio desde weddingData
 * @returns {Object} Estado y funciones de control del audio
 */
export const useAudioPlayer = (audioConfig) => {
  // Estados del reproductor
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  
  // Referencias
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  // Destructuración de configuración
  const {
    src,
    startTime = 0,
    endTime = null,
    volume = 0.6,
    loop = true,
    preload = "metadata"
  } = audioConfig || {}

  // Inicializar audio element
  useEffect(() => {
    if (!src) return

    const audio = new Audio(src)
    audio.preload = preload
    audio.volume = volume

    // Event listeners
    audio.addEventListener('loadstart', () => setIsLoading(true))
    audio.addEventListener('canplay', () => setIsLoading(false))
    audio.addEventListener('error', (e) => {
      setError('Error al cargar el audio')
      setIsLoading(false)
      console.error('Audio error:', e)
    })

    // Manejar tiempo de reproducción
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime
      setCurrentTime(currentTime)

      // Si hay endTime definido y se alcanza, volver al startTime
      if (endTime && currentTime >= endTime) {
        if (loop) {
          audio.currentTime = startTime
        } else {
          audio.pause()
          setIsPlaying(false)
        }
      }
    })

    // Evento cuando termina el audio (fallback)
    audio.addEventListener('ended', () => {
      if (loop && startTime !== undefined) {
        audio.currentTime = startTime
        audio.play()
      } else {
        setIsPlaying(false)
      }
    })

    audioRef.current = audio

    return () => {
      // Cleanup
      audio.pause()
      audio.removeEventListener('loadstart', () => {})
      audio.removeEventListener('canplay', () => {})
      audio.removeEventListener('error', () => {})
      audio.removeEventListener('timeupdate', () => {})
      audio.removeEventListener('ended', () => {})
      audioRef.current = null
    }
  }, [src, startTime, endTime, volume, loop, preload])

  // Función para reproducir
  const play = useCallback(async () => {
    if (!audioRef.current) return

    try {
      const audio = audioRef.current
      
      // Si no está en el rango correcto, posicionar en startTime
      if (startTime !== undefined && 
          (audio.currentTime < startTime || (endTime && audio.currentTime >= endTime))) {
        audio.currentTime = startTime
      }

      await audio.play()
      setIsPlaying(true)
      setError(null)
    } catch (err) {
      console.error('Error al reproducir:', err)
      setError('No se pudo reproducir el audio')
      setIsPlaying(false)
    }
  }, [startTime, endTime])

  // Función para pausar
  const pause = useCallback(() => {
    if (!audioRef.current) return

    audioRef.current.pause()
    setIsPlaying(false)
  }, [])

  // Función para alternar play/pause
  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  // Función para detener y resetear
  const stop = useCallback(() => {
    if (!audioRef.current) return

    audioRef.current.pause()
    audioRef.current.currentTime = startTime || 0
    setIsPlaying(false)
    setCurrentTime(startTime || 0)
  }, [startTime])

  // Función para cambiar volumen
  const setVolume = useCallback((newVolume) => {
    if (!audioRef.current) return
    
    const clampedVolume = Math.max(0, Math.min(1, newVolume))
    audioRef.current.volume = clampedVolume
  }, [])

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Retornar estado y funciones
  return {
    // Estados
    isPlaying,
    isLoading,
    error,
    currentTime,
    
    // Funciones de control
    play,
    pause,
    toggle,
    stop,
    setVolume,
    
    // Referencias para uso avanzado
    audioRef,
    
    // Información útil
    duration: endTime && startTime ? endTime - startTime : null,
    progress: endTime && startTime ? 
      Math.max(0, Math.min(1, (currentTime - startTime) / (endTime - startTime))) : 0
  }
}
