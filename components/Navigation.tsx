"use client";
import Link from "next/link";
import Transition from "@/components/Transition";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path); // Initialize with path

  // Track if path changes and handle routing state
  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
    setPrevPath(path); // Update prevPath with the new path
  }, [path, prevPath]); // This ensures the previous path is updated correctly

  // Reset isRouting after a delay once the route changes
  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1260); // Duration matches the transition duration
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  // Handle window resize and update the menu open state accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only run once on mount

  return (
    <>
      {isRouting && <Transition />}
      
      {/* Hamburger button for mobile */}
      <button 
        className="md:hidden fixed z-50 bottom-16 left-1/2 transform -translate-x-[22px] bg-black p-3 rounded-full border border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile navigation menu */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-white
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        transition-transform duration-300
      `}>
        <div className="flex justify-around items-center py-4 px-2">
          {NavLinks.map((nav) => (
            <Link 
              key={nav.name} 
              href={nav.link} 
              className="flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <nav.icon
                className={`w-[28px] h-[28px] ${path === nav.link ? "text-purple-800" : "text-white"} transition-colors duration-300`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop sidebar navigation */}
      <div className="hidden md:flex bg-black fixed z-[50] max-h-[300px] rounded-full flex-col justify-between items-center border navbar border-white px-4 py-10 shadow-sm
        md:w-[10%] md:right-[-30px] md:top-[80px] lg:w-[8%] lg:right-[-60px] lg:top-[80px]
      ">
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className="py-3 min-w-[80%]">
            <nav.icon
              className={`w-[32px] h-[32px] ${path === nav.link ? "text-purple-800" : "text-white"} transition-colors duration-300`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
