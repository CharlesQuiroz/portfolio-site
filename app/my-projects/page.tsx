import ProjectCard from '@/components/ProjectCard'
import { Coding_Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(city-bg-3.jpg" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center mx-auto pt-20'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px]'> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
              {" "}
              UI/UX {" "}
            </span> Projects </h1>
          <p className='text-gray-400 text-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper massa eu velit commodo fringilla. Etiam elementum venenatis convallis. Maecenas vitae sodales sem. Duis sagittis nibh quis nunc tempus, et condimentum eros iaculis. Aliquam congue ultrices tortor quis hendrerit.
          </p>
          <div className='grid grid-cols-2 gap-5 max-w-[80%] max-h-[80%]'>
            {Coding_Projects.map((Coding_Projects, index) => (
              <ProjectCard key={index}
                title={Coding_Projects.title}
                text={Coding_Projects.text}
                image={Coding_Projects.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page