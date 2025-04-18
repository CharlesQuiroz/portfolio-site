"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'

interface Props {
  image: string,
  title: string,
  text: string
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='w-full h-[260px] rounded-md cursor-pointer'>
      <motion.div className='flip-card-inner w-full h-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)} >
        
        <div className='w-full h-full group relative flip-card-front rounded-lg p-4 overflow-hidden'>
          <div className='absolute inset-0 w-full h-full'>
            <div className='relative w-full h-full'>
              <Image 
                src={image} 
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
            </div>
          </div>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
          <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-10 justify-center text-white'>
            Learn More &gt;
          </div>
        </div>
        
        <div className='w-full h-full group relative flip-card-back rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full'>
            <div className='relative w-full h-full'>
              <Image 
                src={image} 
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
            </div>
          </div>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-60'/>
          <div className='flex flex-col gap-5 py-1 z-20 relative'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-200 text-sm'>{text}</p>                
          </div>
        </div>  
      </motion.div>
    </div>
  )
}

export default ProjectCard