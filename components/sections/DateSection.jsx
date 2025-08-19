// 📅 DateSection - Sección de fecha y countdown

import React from 'react'
import CountdownTimer from '../countdown-timer'
import { weddingData } from '../../data/weddingData'

export default function DateSection() {
  const { wedding, messages } = weddingData

  return (
    <section id="date" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg text-muted-foreground italic">
            {messages.dateMessage}
          </p>

          <h2 className="font-script text-4xl text-secondary">FECHA ESPECIAL</h2>

          <div className="bg-primary/20 rounded-3xl p-12 max-w-md mx-auto">
            <div className="text-2xl font-medium text-foreground mb-2">
              {wedding.dayName}
            </div>
            <div className="text-8xl font-bold text-primary mb-2">
              {wedding.day}
            </div>
            <div className="text-2xl font-medium text-foreground mb-2">
              {wedding.month}
            </div>
            <div className="text-3xl font-medium text-foreground">
              {wedding.year}
            </div>
          </div>

          <h3 className="font-script text-3xl text-secondary">
            {messages.countdownTitle}
          </h3>

          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
