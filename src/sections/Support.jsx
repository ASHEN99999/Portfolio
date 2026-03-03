import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Coffee, Heart } from 'lucide-react';

const Support = () => {
    const contributionLink = "https://buymeacoffee.com/shalinda";

    return (
        <section id="support" className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Support My Work" subtitle="Buy me a coffee" />

                <div className="max-w-3xl mx-auto block">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel p-10 md:p-14 rounded-3xl text-center space-y-8"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                            <Coffee size={40} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Appreciate my work?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                                If you found my portfolio inspiring or my projects helpful, consider buying me a coffee. It fuels my late night coding sessions and helps me build more amazing things!
                            </p>
                        </div>

                        <a
                            href={contributionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:-translate-y-1"
                        >
                            <Heart size={20} className="fill-white" />
                            Buy me a coffee for $5
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Support;
