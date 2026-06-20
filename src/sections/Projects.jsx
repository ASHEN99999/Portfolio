import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
    {
        title: 'UNIMATE',
        description: 'A full-stack university-focused MERN application streamlining student services by integrating multiple campus marketplaces — housing, meals, laundry, and second-hand goods. Features role-based access control for students, service providers, and administrators.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        image: '/uploads/projects/unimate.png',
        github: 'https://github.com/ASHEN99999/UNIMATE',
        live: null
    },
    {
        title: 'Resort Aurora Hotel Management System',
        description: 'A robust hotel management system featuring room reservations, spa management, guest profiles, event scheduling, and analytics. Enhanced user experience with intuitive design and advanced booking features.',
        tech: ['React', 'Vite', 'TypeScript'],
        image: '/uploads/projects/resort-aurora.png',
        github: 'https://github.com/ASHEN99999',
        live: null
    },
    {
        title: 'Smart Campus Operation Hub',
        description: 'Centralized dashboard for monitoring campus energy usage, facility management, and resource allocation to improve operational efficiency.',
        tech: ['Java', 'JavaScript', 'Spring Boot', 'HTML', 'CSS'],
        image: '/uploads/projects/smart-campus.png',
        github: 'https://github.com/ASHEN99999',
        live: null
    },
    {
        title: 'Online Movie Ticket Booking System',
        description: 'A web application for seamless movie ticket booking with secure login, robust authentication, and user-friendly design. Enables users to browse movies, select showtimes, and reserve seats.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/uploads/projects/movie-booking.png',
        github: 'https://github.com/ASHEN99999',
        live: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Projects" subtitle="Things I have built and shipped." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-primary/30 text-6xl font-black select-none">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                            <Github size={16} /> GitHub
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
