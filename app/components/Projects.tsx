import React from 'react'
import { AnimatedPinDemo } from './AnimatedPinDemo'

const Projects = () => {
  return (
    <div className='h-screen w-full bg-indigo-300'>
        <div className='flex items-center justify-center p-4'>
            <h1 className='text-7xl text-black'>MY PROJECTS</h1> 
        </div>
        <div className='flex justify-evenly overflow-auto'>
        <AnimatedPinDemo title ="FinTrack" description = "It is an expense tracker web app"/>
        <AnimatedPinDemo/>
        <AnimatedPinDemo/>
        <AnimatedPinDemo/>
        </div>
    </div>
  )
}

export default Projects