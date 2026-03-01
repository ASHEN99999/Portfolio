import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const ROLES = ["Web Developer", "UI/UX Designer", "Full-Stack Developer", "AI Enthusiast", "Creative Problem Solver"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 pt-20">

            <ParticleBackground />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl font-medium text-primary mb-4"
                >
                    Hi, I am
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                >
                    Amal <span className="text-gradient">Shalinda</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-12 mb-6"
                >
                    <h3 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center gap-2">
                        I love to work as a
                        <span className="font-bold text-gray-900 dark:text-white inline-block min-w-[280px] text-left">
                            {ROLES[roleIndex]}
                            <span className="animate-pulse ml-1">|</span>
                        </span>
                    </h3>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Believe in your abilities, and the world will open up to you...
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center items-center space-x-6 mb-16"
                >
                    <a href="https://github.com/Shalinda99" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/amal-shalinda-188885231/" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary">
                        <Linkedin size={24} />
                    </a>
                    <a href="#contact" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary">
                        <Mail size={24} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                        <ArrowDown size={32} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
