"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TransitionVariants = {
    initial: { width: '100%' },
    animate: { width: '0%' },
    exit: { width: ["0%", "100%"] }
};

const MobileTransitionVariants = {
    initial: { y: "100%", height: '100%' },
    animate: { y: "0%", height: '100%' },
    exit: { y: ["0%", "100%"], height: '100%' }
};

const Transition = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <div>
            <motion.div 
                className="fixed right-0 h-screen w-screen absolute inset-y-0 left-0 z-[30] bg-[#2e2257]" 
                variants={isMobile ? MobileTransitionVariants : TransitionVariants} 
                initial="initial" 
                exit="exit" 
                animate="animate"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div 
                className="fixed right-0 h-screen w-screen absolute inset-y-0 left-0 z-[20] bg-[#3b2d71]" 
                variants={isMobile ? MobileTransitionVariants : TransitionVariants} 
                initial="initial" 
                exit="exit" 
                animate="animate"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div 
                className="fixed right-0 h-screen w-screen absolute inset-y-0 left-0 z-[10] bg-[#4b3792]" 
                variants={isMobile ? MobileTransitionVariants : TransitionVariants} 
                initial="initial" 
                exit="exit" 
                animate="animate"
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            />
        </div>
    );
}

export default Transition;
