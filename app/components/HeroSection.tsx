'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Floating animation variants
  const floatingAnimation = {
    y: [-20, 20],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-mint/10 rounded-full blur-3xl animate-pulse top-0 -left-64"></div>
        <div className="absolute w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl animate-pulse bottom-0 -right-64"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#20c997' : '#ff7a5a'}33, transparent)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              backdropFilter: 'blur(8px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content with Parallax */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            style={{ y: y1, opacity }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glassmorphism-pill mb-6">
                <span className="text-mint">Web3 Learning Revolution</span>
                <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-mint/20 via-coral/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Launch Your Own
              <motion.span 
                className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-mint to-coral relative"
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              >
                Web3 Learn2Earn Platform
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Let your users learn, earn, and own—fully customizable on-chain LMS
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.button
                className="glassmorphism-button-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(32, 201, 151, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Demo
              </motion.button>
              <motion.button
                className="glassmorphism-button-secondary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 122, 90, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Deploy Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Image with Parallax */}
          <motion.div 
            className="flex-1 relative"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[600px]">
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
                animate={floatingAnimation}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-mint/20 to-coral/20 rounded-full blur-3xl"></div>
                <Image
                  src="/hero-3d.png"
                  alt="Web3 Learning Platform"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                />
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-mint to-coral"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  style={{
                    transformOrigin: "center",
                    translate: `-50% -50%`,
                    rotate: `${i * 120}deg`,
                    top: `${50 + Math.sin(i * 120) * 30}%`,
                    left: `${50 + Math.cos(i * 120) * 30}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 