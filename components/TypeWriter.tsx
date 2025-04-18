'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "Web Development",
  "Back-End Development",
  "UI-UX Design",
];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const currentTitle = titles[index];
    
    if (typing) {
      if (subText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setSubText(currentTitle.substring(0, subText.length + 1));
        }, 100); 
      } else {
        timeout = setTimeout(() => setTyping(false), 2000); 
      }
    } else {
      if (subText.length > 0) {
        timeout = setTimeout(() => {
          setSubText(currentTitle.substring(0, subText.length - 1));
        }, 50); 
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [subText, typing, index]);

  return (
    <div className="flex flex-col text-white font-semibold text-[40px] leading-tight">
      <h1>Where Ideas Come to Life</h1>
      <span className="relative block">
        <h1 className="invisible">
          {titles.reduce((a, b) => a.length > b.length ? a : b)}
        </h1>
        <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          {subText}
          <motion.span
            className="text-purple-500"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </span>
      </span>
    </div>
  );
}
