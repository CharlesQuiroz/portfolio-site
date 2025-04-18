"use client";
import Link from "next/link";
import Transition from "@/components/Transition";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1260);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      className="
      bg-black fixed z-[50] max-h-[300px] rounded-full
      flex flex-col justify-between items-center border navbar border-white px-6 py-10 shadow-sm
      w-[20%] right-[-40px] top-[80px]
      md:w-[10%] md:right-[-30px] md:top-[80px]
      lg:w-[8%] lg:right-[-60px] lg:top-[80px]
    "    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="py-3 min-w-[80%]">
          <nav.icon
            className={`w-[32px] h-[32px] ${
              path === nav.link ? "text-purple-800" : "text-white"
            } transition-colors duration-300`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
