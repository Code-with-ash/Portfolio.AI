"use client"
import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import AboutSection from './components/Aboutme'
import { StickyScroll } from './components/ui/stickyscroll'
import { StickyScrollRevealDemo } from './components/TopSkills'
import Projects from './components/Projects'
import Lenis from 'lenis'
import { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Clean up if needed
    }
  }, [])

  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
      </main>
      <AboutSection />
      <StickyScrollRevealDemo />
      <Projects />
    </>
  )
}

export default page