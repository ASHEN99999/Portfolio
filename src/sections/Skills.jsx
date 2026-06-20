import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Globe, PenTool, Layout, Database, Kanban, TestTube, Cloud } from 'lucide-react';

const skillsData = [
    {
        title: 'Programming Languages',
        desc: 'Proficient in Java, JavaScript, C, Python, and Angular for building diverse software solutions.',
        icon: <Layout size={40} className="text-pink-500" />,
        color: 'from-pink-500/20 to-rose-500/20'
    },
    {
        title: 'Web Development',
        desc: 'Experienced in React, Spring Boot, Bootstrap, HTML, CSS, Tailwind CSS, and Streamlit for building responsive web applications.',
        icon: <Globe size={40} className="text-primary" />,
        color: 'from-blue-500/20 to-primary/20'
    },
    {
        title: 'Database Management',
        desc: 'Skilled with MySQL, MongoDB, and Oracle for designing and managing relational and NoSQL database systems.',
        icon: <Database size={40} className="text-accent" />,
        color: 'from-green-500/20 to-accent/20'
    },
    {
        title: 'DevOps & CI/CD',
        desc: 'Hands-on experience with Docker, Jenkins, Git, Kafka, Jira, Postman, and Bitbucket in Agile environments.',
        icon: <Cloud size={40} className="text-sky-500" />,
        color: 'from-sky-500/20 to-cyan-500/20'
    },
    {
        title: 'Testing & Automation',
        desc: 'Proficient in Playwright for end-to-end automated testing and Postman for API validation and testing.',
        icon: <TestTube size={40} className="text-indigo-500" />,
        color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
        title: 'UI/UX & Design',
        desc: 'Skilled in Figma for designing intuitive user interfaces and delivering great user experiences.',
        icon: <PenTool size={40} className="text-secondary" />,
        color: 'from-purple-500/20 to-secondary/20'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Skills" subtitle="My skills, Your success." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                        >
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                            <div className="mb-6 relative z-10 bg-white dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700">
                                {skill.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
