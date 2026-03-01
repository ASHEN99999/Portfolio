import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`text-center space-y-2 mb-16 ${className}`}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold pb-2">
                {title.split(' ').map((word, i, arr) => (
                    i === arr.length - 1 ? (
                        <span key={i} className="text-gradient"> {word}</span>
                    ) : (
                        <span key={i}> {word}</span>
                    )
                ))}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>
    );
};

export default SectionHeader;
