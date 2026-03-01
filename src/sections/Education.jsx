import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { GraduationCap, Landmark } from 'lucide-react';

const eduData = [
    {
        institution: 'University of Moratuwa',
        period: 'Jun 2021 - Jun 2025',
        degree: 'B.Sc. (Hons) in Information Technology',
        details: 'CGPA - 3.51 | L4S1 SGPA - 3.81 (Dean’s List)',
        icon: <GraduationCap size={28} />
    },
    {
        institution: 'Richmond College, Galle',
        period: 'Jun 2016 - Aug 2019',
        degree: 'G.C.E Advanced Level Examination',
        details: 'Physical Science stream. Grades: A B B.',
        icon: <Landmark size={28} />
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Education" subtitle="My academic journey and achievements." />

                <div className="max-w-4xl mx-auto relative border-l-4 border-primary/30 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
                    {eduData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
                        >
                            <div className="absolute -left-[54px] md:-left-[86px] top-6 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg z-10">
                                {item.icon}
                            </div>

                            <div className="mb-2 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                {item.period}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{item.institution}</h3>
                            <h4 className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-3">{item.degree}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
