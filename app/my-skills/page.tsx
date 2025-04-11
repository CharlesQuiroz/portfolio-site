"use client"

import 'swiper/css'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FrontAndBackEndSkilLData, UiUxGraphicsSkillData} from '@/constants'
import { Autoplay } from 'swiper/modules'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/city-bg-1.jpg" }}
      className='h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center'>
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center mx-auto'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px]'> Skills
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
              {" "}
              & {" "}
            </span> Technologies </h1>
          <p className='text-white-400 text-[20px]'>
          My portfolio showcases a versatile skill set, encompassing both front-end and back-end development, alongside UI/UX design and graphics. While I excel in crafting responsive user interfaces with technologies like React and Next.js, my expertise extends deeply into robust back-end systems, leveraging languages such as C#, Java, and Node.js, and database management with Postgres, to build scalable and efficient applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 p-2">
          <div>
            <h5 className='font-semibold text-white text-[50px]'> Front-End
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                {" "}
                & {" "}
              </span> Backend </h5>
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              speed={5000}
              modules={[Autoplay]}
              className='max-w-[80%]'>
              {FrontAndBackEndSkilLData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
              }}
              speed={5000}
              modules={[Autoplay]}
              className='max-w-[80%]'>
              {FrontAndBackEndSkilLData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <h5 className='font-semibold text-white text-[50px]'> UI/UX
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                {" "}
                & {" "}
              </span> Video Editing </h5>
            <Swiper
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false
              }}
              speed={5000}
              modules={[Autoplay]}
              className='max-w-[80%]'>
              {UiUxGraphicsSkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
              }}
              speed={5000}
              modules={[Autoplay]}
              className='max-w-[80%]'>
              {UiUxGraphicsSkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page