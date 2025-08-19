"use client"

//import Navigation from "../components/navigation"
import HeroSection from "../components/sections/HeroSection"
import ParentsSection from "../components/sections/ParentsSection"
import DateSection from "../components/sections/DateSection"
import CeremonySection from "../components/sections/CeremonySection"
import ReceptionSection from "../components/sections/ReceptionSection"
import TimelineSection from "../components/sections/TimelineSection"
import DressCodeSection from "../components/sections/DressCodeSection"
import GiftsSection from "../components/sections/GiftsSection"
import GallerySection from "../components/sections/GallerySection"
import AudioPlayer from "../components/AudioPlayer"

export default function WeddingInvitation() {

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <HeroSection />
      <ParentsSection />
      <DateSection />
      <CeremonySection />
      <ReceptionSection />
      <TimelineSection />
      <DressCodeSection />
      <GiftsSection />
      <GallerySection />
      
      {/* 🎵 Reproductor de audio fijo */}
      <AudioPlayer />
    </div>
  )
}
