// 🎁 GiftsSection - Sección de información de regalos

import React from 'react'
import { Gift } from 'lucide-react'
import { weddingData } from '../../data/weddingData'

export default function GiftsSection() {
  const { gifts } = weddingData

  return (
    <section id="gifts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-script text-4xl text-secondary">Regalo</h2>

          <div className="bg-muted/50 rounded-2xl p-8 max-w-md mx-auto">
            <Gift className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="font-script text-3xl text-foreground mb-4">
              {gifts.type}
            </h3>
            <p className="text-muted-foreground">
              {gifts.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
