import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Award } from 'lucide-react';

const certificationsData = [
    // Add your certifications here — example structure:
    // {
    //     title: 'AWS Certified Developer',
    //     issuer: 'Amazon Web Services',
    //     date: 'Jan 2025',
    //     image: '/uploads/certs/aws.png',
    //     link: 'https://...'
    // }
];

const placeholder = [1, 2, 3];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Certifications" subtitle="Courses and credentials I have earned." />

                {certificationsData.length === 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {placeholder.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[200px]"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Award size={28} className="text-primary/40" />
                                </div>
                                <p className="text-gray-400 dark:text-gray-600 text-sm">Coming soon...</p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start gap-3">
                                        <Award size={20} className="text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} · {cert.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
