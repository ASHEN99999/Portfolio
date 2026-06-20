import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
    {
        title: 'Prompt Engineering for Beginners - Learn ChatGPT Prompting',
        issuer: 'Udemy',
        date: 'Jan 2026',
        image: '/uploads/cert_prompt_engineering.jpeg',
        link: 'https://ude.my/UC-0e22019f-75d5-40ed-b50f-1391a68ac791'
    },
    {
        title: 'Prompt Perfect',
        issuer: 'Udemy',
        date: 'Jan 2026',
        image: '/uploads/cert_prompt_perfect.jpeg',
        link: 'https://ude.my/UC-6deada98-ef45-4521-9c37-c4ef6f56fea0'
    },
    {
        title: 'Body Language in Business: Gain Confidence & Read Others',
        issuer: 'Udemy',
        date: 'Aug 2025',
        image: '/uploads/cert_body_language.jpeg',
        link: 'https://ude.my/UC-2e9a9cf4-6833-4398-9453-07b06808dfa9'
    },
    {
        title: 'Master Git and GitHub in 5 Days: Go from Zero to Hero',
        issuer: 'Udemy',
        date: 'Jun 2026',
        image: '/uploads/cert_git_github.jpeg',
        link: 'https://ude.my/UC-73ac8689-738c-4a48-8be6-a5264304cc5d'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Certifications" subtitle="Courses and credentials I have earned." />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {certificationsData.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Certificate Image */}
                            <div className="h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Certificate Info */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-start gap-2">
                                        <Award size={18} className="text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                                                {cert.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {cert.issuer} · {cert.date}
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink size={14} className="text-gray-400 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
