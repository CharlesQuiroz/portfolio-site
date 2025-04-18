import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
    return (
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-8 md:px-20'>
            <div className='flex flex-row gap-2 sm:gap-3 items-center'>
                <div className='relative w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]'>
                    <Image 
                        src="/LOGO.png"
                        alt='logo'
                        fill
                        className='object-contain rounded-[10%]' 
                    />
                </div>
                <h1 className='text-white text-[20px] sm:text-[25px] font-semibold'>
                    Hoshi 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                        {" "}System{" "}
                    </span>
                </h1>
            </div>

            <div className='flex flex-row gap-4 sm:gap-5 mb-2'>
                {Socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="sm:w-[28px] sm:h-[28px]"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar
