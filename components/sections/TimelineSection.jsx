// ⏰ TimelineSection - Sección de cronograma del evento

import React from 'react'
import Image from 'next/image'
import { weddingData } from '../../data/weddingData'

export default function TimelineSection() {
  const { timeline, messages } = weddingData

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/celebration.png"
                alt="Celebración"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-8">
              {timeline.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg"
                >
                  <div 
                    className={`w-12 h-12 ${
                      item.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium text-lg">{item.name}</div>
                    <div 
                      className={`text-2xl font-bold ${
                        item.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center mt-8 p-6 bg-muted/50 rounded-lg">
                <p className="text-lg italic text-muted-foreground">
                  &ldquo;{messages.timelineQuote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
