import ProjectCard from '@/components/ProjectCard'
import { Coding_Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(city-bg-3.jpg)" }}
      className='w-screen min-h-screen flex items-center justify-center bg-center bg-cover py-20'>
      <div className='flex flex-col gap-10 max-w-7xl w-full text-center items-center mx-auto px-4'>
        <h1 className='font-semibold text-white text-4xl md:text-5xl items-center'>
          Coding 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
            {" "}
            Projects {" "}
            {" "}
            & Designs
          </span> 
        
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          {Coding_Projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page