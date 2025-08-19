// 🎵 useAudioPlayer Hook - Control de audio con rango de tiempo específico

import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Detectar iOS de forma segura para SSR
 */
const isIOSDevice = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

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
    if (!src || typeof window === 'undefined') return

    // Detectar dispositivo iOS
    const isIOS = isIOSDevice()

    const audio = new Audio()
    
    // Configuración específica para iOS
    if (isIOS) {
      audio.preload = "none"  // iOS no respeta "metadata" bien
      audio.crossOrigin = "anonymous"  // Evitar problemas CORS en iOS
    } else {
      audio.preload = preload
    }
    
    audio.src = src
    audio.volume = volume
    audio.loop = false  // Manejamos el loop manualmente para mejor control

    // Event listeners mejorados para iOS
    audio.addEventListener('loadstart', () => {
      setIsLoading(true)
      setError(null)
    })

    audio.addEventListener('loadeddata', () => {
      setIsLoading(false)
      console.log('Audio loaded successfully')
    })

    audio.addEventListener('canplay', () => {
      setIsLoading(false)
      console.log('Audio can play')
    })

    audio.addEventListener('canplaythrough', () => {
      setIsLoading(false)
      console.log('Audio can play through')
    })

    audio.addEventListener('error', (e) => {
      console.error('❌ Audio error:', e)
      const error = audio.error
      
      let errorMessage = 'Error al cargar el audio'
      
      if (error) {
        console.error('Error details:', error)
        console.error('Error code:', error.code, 'Message:', error.message)
        
        // Códigos de error específicos
        switch (error.code) {
          case 1: // MEDIA_ERR_ABORTED
            errorMessage = isIOS ? 'Audio cancelado - Toca para reintentar' : 'Carga de audio cancelada'
            break
          case 2: // MEDIA_ERR_NETWORK
            errorMessage = isIOS ? 'Error de red en iOS - Verifica conexión' : 'Error de red al cargar audio'
            break
          case 3: // MEDIA_ERR_DECODE
            errorMessage = isIOS ? 'Error de formato en iOS - Archivo corrupto' : 'Error al decodificar audio'
            break
          case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
            errorMessage = isIOS ? 'Formato no soportado en iOS - Prueba otro navegador' : 'Formato de audio no soportado'
            break
          default:
            errorMessage = isIOS ? 'Error en iOS - Intenta tocar para activar' : 'Error desconocido de audio'
        }
      }
      
      setError(errorMessage)
      setIsLoading(false)
      setIsPlaying(false)
    })

    audio.addEventListener('stalled', () => {
      console.warn('Audio stalled - network issue')
      if (isIOS) {
        setError('Carga lenta en iOS - Toca para reintentar')
      }
    })

    audio.addEventListener('waiting', () => {
      console.log('Audio waiting for data')
      setIsLoading(true)
    })

    audio.addEventListener('playing', () => {
      setIsLoading(false)
      setError(null)
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

  // Función para reproducir - Optimizada para iOS
  const play = useCallback(async () => {
    if (!audioRef.current) return

    try {
      const audio = audioRef.current
      
      // Detectar iOS para manejo especial
      const isIOS = isIOSDevice()

      // En iOS, intentar cargar el audio si no está listo
      if (isIOS && audio.readyState < 2) {
        setIsLoading(true)
        console.log('iOS: Loading audio...')
        
        // Forzar carga en iOS
        audio.load()
        
        // Esperar a que esté listo
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error('Timeout loading audio on iOS'))
          }, 10000) // 10 segundos timeout

          const onCanPlay = () => {
            clearTimeout(timeout)
            audio.removeEventListener('canplay', onCanPlay)
            audio.removeEventListener('error', onError)
            resolve()
          }

          const onError = (e) => {
            clearTimeout(timeout)
            audio.removeEventListener('canplay', onCanPlay)
            audio.removeEventListener('error', onError)
            reject(e)
          }

          audio.addEventListener('canplay', onCanPlay, { once: true })
          audio.addEventListener('error', onError, { once: true })
        })
      }
      
      // Si no está en el rango correcto, posicionar en startTime
      if (startTime !== undefined && 
          (audio.currentTime < startTime || (endTime && audio.currentTime >= endTime))) {
        audio.currentTime = startTime
      }

      setIsLoading(false)
      await audio.play()
      setIsPlaying(true)
      setError(null)
      
      console.log('Audio playing successfully')
      
    } catch (err) {
      console.error('Error al reproducir:', err)
      
      // Mensajes específicos para iOS
      const isIOS = isIOSDevice()
      const errorMessage = isIOS ? 
        'iOS requiere interacción - Toca de nuevo' : 
        'No se pudo reproducir el audio'
      
      setError(errorMessage)
      setIsPlaying(false)
      setIsLoading(false)
    }
  }, [startTime, endTime])

  // Función para pausar
  const pause = useCallback(() => {
    if (!audioRef.current) return

    audioRef.current.pause()
    setIsPlaying(false)
  }, [])

  // Función para reiniciar audio (útil para iOS)
  const restart = useCallback(async () => {
    if (!audioRef.current) return
    
    try {
      const audio = audioRef.current
      audio.pause()
      audio.currentTime = 0
      audio.load()  // Recargar completamente
      setIsLoading(true)
      setError(null)
      setIsPlaying(false)
      
      // Esperar a que esté listo y luego reproducir
      await new Promise((resolve) => {
        const onCanPlay = () => {
          audio.removeEventListener('canplay', onCanPlay)
          resolve()
        }
        audio.addEventListener('canplay', onCanPlay, { once: true })
      })
      
      await play()
    } catch (err) {
      console.error('Error al reiniciar:', err)
      setError('Error al reiniciar audio')
    }
  }, [play])

  // Función para alternar play/pause - Mejorada para iOS
  const toggle = useCallback(async () => {
    if (isLoading) return // No permitir acciones mientras carga
    
    if (isPlaying) {
      pause()
    } else {
      // Si hay error, intentar reiniciar en lugar de solo play
      if (error) {
        await restart()
      } else {
        await play()
      }
    }
  }, [isPlaying, isLoading, error, play, pause, restart])

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
    restart,
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
