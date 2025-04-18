"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Transition = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        setHasMounted(true);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    if (!hasMounted) return null;

    const variants = {
        initial: isMobile 
            ? { scaleY: 1, transformOrigin: "top" } 
            : { scaleX: 1, transformOrigin: "left" },
        animate: isMobile 
            ? { scaleY: 0, transformOrigin: "top" } 
            : { scaleX: 0, transformOrigin: "left" },
        exit: isMobile 
            ? { scaleY: [0,1], transformOrigin: "top" } 
            : { scaleX: [0,1], transformOrigin: "left" }
    };

    return (
        <div>
            {[30, 20, 10].map((z, index) => (
                <motion.div
                    key={z}
                    className={`fixed inset-0 z-[${z}] bg-[#${["2e2257","3b2d71","4b3792"][index]}]`}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.6, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
};

export default Transition;
