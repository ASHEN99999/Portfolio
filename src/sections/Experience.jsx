import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Briefcase } from 'lucide-react';

const projects = [
    {
        name: 'Mirth Connect Migration',
        desc: 'Migrated Mirth Connect through Java 8 → 21 and rebuilt it as a standalone Maven-based application, eliminating legacy Ant and JNLP dependencies.',
        tech: ['Java', 'Spring Boot', 'Maven', 'Ant']
    },
    {
        name: 'VM Deployment Testing',
        desc: 'Validated deployments in isolated Vagrant-managed VMs before production rollout.',
        tech: ['Vagrant']
    },
    {
        name: 'Healthcare Monitoring Dashboard',
        desc: 'Built real-time healthcare monitoring dashboards with integrated Oracle and PostgreSQL data sources, containerized for consistent deployment.',
        tech: ['Python', 'Streamlit', 'Oracle', 'PostgreSQL', 'Docker']
    },
    {
        name: 'CI/CD Automation',
        desc: 'Automated CI/CD pipelines with webhook-triggered validation and deployment workflows, plus custom scripts to reduce manual checks.',
        tech: ['Jenkins', 'Groovy', 'Python', 'Bitbucket Webhooks']
    },
    {
        name: 'Angular Monorepo Migration',
        desc: 'Led R&D migration of a 300+ library Angular 6 application to Angular 12 via a custom-built monorepo architecture.',
        tech: ['Angular', 'TypeScript']
    },
    {
        name: 'MCP Tooling',
        desc: 'Built internal MCP tools enabling natural-language querying of Jira tickets and Bitbucket repo data.',
        tech: ['Python', 'Docker', 'PostgreSQL']
    },
    {
        name: 'AI Healthcare Chatbot',
        desc: 'Developed a PoC AI healthcare chatbot for patient data retrieval and health guidance.',
        tech: ['Python', 'Docker', 'PostgreSQL', 'Streamlit']
    },
    {
        name: 'DeriChat SDK Integration',
        desc: 'Built a Node.js/Express proxy to integrate a third-party chat SDK into an Angular dashboard, resolving CORS and auth challenges.',
        tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="Work Experience" subtitle="My journey so far in the professional world." />

                <div className="max-w-5xl mx-auto relative border-l-4 border-secondary/30 ml-4 md:ml-12 pl-8 md:pl-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="relative p-6 md:p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                        <div className="absolute -left-[54px] md:-left-[86px] top-6 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-lg z-10">
                            <Briefcase size={28} />
                        </div>

                        <div className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                            July 2025 – July 2026 | Colombo
                        </div>
                        <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Intern Software Engineer</h3>
                        <h4 className="text-lg text-primary font-medium mb-6">Cloud Solutions International</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/40 transition-colors"
                                >
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{project.name}</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{project.desc}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
