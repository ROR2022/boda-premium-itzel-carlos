// 👗 DressCodeSection - Sección de código de vestimenta y confirmación

import React from 'react'
import { Phone } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { weddingData } from '../../data/weddingData'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { getOverlayStyle } from '@/utils/overlay'

export default function DressCodeSection() {
  const { dressCode, styling } = weddingData
  const { confirmAttendance } = useWhatsApp()
  const { dressCodeSection } = styling

  return (
    <section
      id="dresscode"
      className="py-20"
      style={{
        backgroundImage: `url('${dressCodeSection.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        animation: 'fondo1 2s ease 0s 1 normal forwards'
      }}
    >
      {/* Overlay configurable */}
      <div
        style={getOverlayStyle(dressCodeSection)}
        className="absolute inset-0 z-0"
      ></div>

      <div
        style={{
          animation: 'bounce1 2s ease 0s 1 normal forwards'
        }}
        className="container mx-auto px-4 bg-slate-300 bg-opacity-60 p-6 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-script text-4xl text-secondary">
            Código de Vestimenta
          </h2>

          <div 
          style={{display:'none'}}
          className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-32 bg-black rounded-lg mb-4 mx-auto"></div>
              <p className="font-medium">Vestido</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-32 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-16 h-24 bg-black rounded-sm"></div>
              </div>
              <p className="font-medium">Traje</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-foreground">{dressCode.type}</h3>
          <p className="text-lg text-muted-foreground">{dressCode.note}</p>

          <Card className="max-w-md mx-auto bg-primary/10 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="font-script text-3xl text-foreground">
                Confirma tu asistencia
              </h3>
              <p className="text-muted-foreground">
                {dressCode.confirmationMessage}
              </p>
              <Button
                onClick={confirmAttendance}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Confirmar asistencia
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
