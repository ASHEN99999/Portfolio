import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Download } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="About Me" subtitle="A brief introduction about who I am and what I do." />

                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg dark:opacity-30"></div>
                            <img
                                src="/uploads/Ashen.jpeg"
                                alt="Ashen Lakshitha"
                                className="relative z-10 rounded-2xl shadow-xl w-full h-auto lg:max-h-[500px] object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Hello, I am Ashen Lakshitha
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Final-year B.Sc (Hons) Information Technology undergraduate at SLIIT with hands-on experience in software development and web application development. Skilled in Angular, TypeScript, Java, Spring Boot, MERN Stack, SQL, Git, and RESTful APIs.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Strong interest in full-stack development and building scalable, user-focused applications. Seeking an Associate Software Engineer opportunity to contribute technical skills while growing as a software engineering professional.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
