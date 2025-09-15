'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRightIcon,
  EnvelopeIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const terminalCommands = [
  '> npm run build-your-success',
  '> Initializing Diego Ramírez portfolio...',
  '> Loading 15+ enterprise projects...',
  '> Connecting to 50K+ users impact...',
  '> Full-Stack Developer ready ✓',
  '> Technical Leader ready ✓',
  '> Ready to collaborate! 🚀'
];

const stats = [
  { label: '3 años liderando equipos', value: '3+' },
  { label: '10+ proyectos enterprise', value: '10+' },
  { label: 'Stack moderno', value: '🔥' }
];

// Component for background particles with fixed random values to prevent hydration mismatch
const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden" />;
  }

  // Pre-generated fixed values to avoid hydration mismatch
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: ((i * 37) % 100), // Pseudo-random but deterministic
    y: ((i * 73) % 100),
    moveX: ((i * 23) % 100) - 50,
    moveY: ((i * 41) % 100) - 50,
    duration: (i % 3) + 2,
    delay: (i % 10) * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          animate={{
            x: [0, particle.moveX],
            y: [0, particle.moveY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentCommand < terminalCommands.length) {
      const command = terminalCommands[currentCommand];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setDisplayedText(command.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
            setDisplayedText('');
          }, 1500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentCommand]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Particles */}
      <BackgroundParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="text-4xl"
                >
                  👋
                </motion.span>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Hola, soy Diego Ramírez
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
                Full-Stack Developer &<br />
                <span className="text-3xl md:text-5xl">Líder Técnico</span>
              </h2>
              
              <p className="text-xl text-foreground/70 max-w-2xl">
                Transformando ideas en soluciones escalables desde{' '}
                <span className="font-semibold text-accent">
                  León, Guanajuato
                </span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-foreground/10"
                >
                  <div className="text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-foreground/90 rounded-xl p-6 font-mono text-sm shadow-2xl border border-foreground/20"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-background/70 ml-4">diego@portfolio:~$</span>
              </div>
              
              <div className="space-y-2 min-h-[120px]">
                {terminalCommands.slice(0, currentCommand).map((command, index) => (
                  <div key={index} className="text-green-400">
                    {command}
                  </div>
                ))}
                {currentCommand < terminalCommands.length && (
                  <div className="text-green-400">
                    {displayedText}
                    {showCursor && (
                      <span className="animate-pulse text-white">|</span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 relative z-10"
            >
              <a
                href="#projects"
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl group cursor-pointer relative z-20"
              >
                <EyeIcon className="w-5 h-5" />
                <span>Ver mis proyectos</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 bg-background hover:bg-background/80 text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl border border-foreground/20 group cursor-pointer relative z-20"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Contactar ahora</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-background bg-accent/5"
              >
                {/* Professional photo */}
                <Image
                  src="/profile/diego-rmz.png"
                  alt="Diego Ramírez - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-accent/80 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xl">🚀</span>
              </motion.div>
              
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-accent/60 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-foreground/60"
          >
            <span className="text-sm font-medium">Scroll para explorar</span>
            <ChevronRightIcon className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}