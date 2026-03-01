import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Code } from 'lucide-react';

const expData = [
    {
        role: 'Associate Software Engineer',
        company: 'Cloud Solutions International',
        duration: 'July 2025 - Present',
        description: 'Engaged in software development within the healthcare sector, building secure and scalable applications. Involved in AI-related developments, integrating intelligent workflows to enhance modern healthcare solutions.',
        icon: <Code size={28} />
    },
    {
        role: 'Software Engineer Intern',
        company: 'Circles Life, Sri Lanka',
        duration: 'January 2024 - July 2024',
        description: 'Contributed to software projects, focusing on the Circles Config Manager (CCM). Developed and maintained APIs, managed databases, and worked on security and authentication. Wrote unit tests, fixed bugs, and improved system performance. Collaborated with cross-functional teams to enhance efficiency, following agile methodologies and industry best practices.',
        icon: <Briefcase size={28} />
    },
    {
        role: 'Web Developer & Web Designer',
        company: 'Freelance Projects / Fiverr / Upwork',
        duration: 'Oct 2023 - Present',
        description: 'Developed responsive websites and designed UI/UX designs, focusing on user-centered design functionality, and seamless front-end and back-end integration. Tech Stack: React, Spring boot, MySQL, Figma.',
        icon: <Code size={28} />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Work Experience" subtitle="My journey so far in the professional world." />

                <div className="max-w-4xl mx-auto relative border-l-4 border-secondary/30 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
                    {expData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-6 md:p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="absolute -left-[54px] md:-left-[86px] top-6 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-lg z-10">
                                {item.icon}
                            </div>

                            <div className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                                <span>{item.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{item.role}</h3>
                            <h4 className="text-lg text-primary font-medium mb-4">{item.company}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
