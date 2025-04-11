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
      style={{ right: "-5%", top: "20%" }}
      className="absolute z-[50] w-[20%] md:w-[10%] max-h-[300px] rounded-full flex flex-col justify-between items-center border bg-black border-white px-6 py-10"
    >
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
