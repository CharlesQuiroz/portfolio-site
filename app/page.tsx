"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "../components/TypeWriter";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isContactModalOpen]);

  return (
    <main className="w-full h-screen relative overflow-hidden">
      <div className="flex items-center w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/city-of-stars-bg.jpg')", 
          backgroundPositionY: "bottom"
        }}>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black/50 w-full min-h-0 mt-16">
          <div className="px-6 md:px-10 lg:pl-40 pb-20 pt-10 flex flex-col gap-4 md:gap-6 z-[10] max-w-full md:max-w-[900px]">
            <div className="origin-left">
              <Typewriter />
            </div>
            <p className="text-gray-200 text-base md:text-lg lg:text-xm hidden md:block max-w-full">
              Hi there! I&apos;m excited to share my work with you. I&apos;m a developer and graphics enthusiast, passionate about building engaging web experiences and creating visually appealing designs. I enjoy tackling both front-end and back-end challenges, and I&apos;m always eager to learn and grow.
            </p>

            <div className="flex-col md:flex-row hidden md:flex gap-3 md:gap-5 mt-2 md:mt-4">
              <Link href="/my-skills" className="rounded-[20px] group relative bg-purple-500 hover:bg-blue-400 px-4 md:px-6 border border-white py-3 md:py-4 text-lg md:text-xl text-white max-w-[220px] text-center">
                Learn More
              </Link>
              <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent hover:bg-blue-400 px-4 md:px-6 border border-white py-3 md:py-4 text-lg md:text-xl text-white max-w-[220px] text-center">
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                My Projects
              </Link>
              <button 
                onClick={openContactModal}
                className="rounded-[20px] group relative bg-transparent hover:bg-blue-400 px-4 md:px-6 border border-white py-3 md:py-4 text-lg md:text-xl text-white max-w-[220px] text-center"
              >
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                Contact Me  
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center z-[10]">
            <div className="relative md:scale-90 lg:scale-110 animate-float">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/70 flex items-center justify-center overflow-hidden relative">
                <div className="absolute w-full h-full bg-blue-500/30 blur-md"></div>
                <div className="rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 lg:w-88 lg:h-88 relative">
                  <Image
                    src="/Profile.jpg"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-500 rounded-full blur-sm"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-purple-500 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Fixed bottom buttons for mobile view */}
        <div className="absolute flex bottom-24 sm:bottom-10 z-[20] right-5 flex-col md:hidden gap-3">
          <Link href="/my-skills" className="rounded-[20px] group relative bg-purple-500 px-5 border border-white py-2 text-base text-white max-w-[200px]">
            Learn More
          </Link>
          <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent px-5 border border-white py-2 text-base text-white max-w-[200px]">
            My Projects
          </Link>
          <button 
            onClick={openContactModal}
            className="rounded-[20px] group relative bg-transparent px-5 border border-white py-2 text-base text-white max-w-[200px]"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Adjusted city position 
      <div className="absolute bottom-[-250px] md:bottom-[-300px] z-[5] w-full">
        <Image src="/City.png"
          alt="City"
          height={3000}
          width={3000}
          className="w-full" />
      </div>*/}

      <Image src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        unoptimized className="absolute top-10 left-0 z-[10]" />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  );
}