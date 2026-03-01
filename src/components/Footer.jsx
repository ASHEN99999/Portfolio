import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <a href="#home" className="text-xl font-bold tracking-tighter block mb-2">
                            <span className="text-gradient">Amal</span> Shalinda
                        </a>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            All Rights Reserved. &copy; {new Date().getFullYear()}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Shalinda99" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/amal-shalinda-188885231/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex justify-center items-center text-sm text-gray-500 dark:text-gray-400">
                    Designed & Built with <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> by Amal Shalinda
                </div>
            </div>
        </footer>
    );
};

export default Footer;
