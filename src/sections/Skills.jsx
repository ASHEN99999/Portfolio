import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Globe, PenTool, Layout, Database, Kanban, TestTube, Cpu, Cloud } from 'lucide-react';

const skillsData = [
    {
        title: 'Web Development',
        desc: 'Experienced in ReactJS, HTML, CSS, Node.js, Spring Boot, Go and Bootstrap for building responsive websites.',
        icon: <Globe size={40} className="text-primary" />,
        color: 'from-blue-500/20 to-primary/20'
    },
    {
        title: 'UI / UX Designing',
        desc: 'Skilled in UI/UX design using tools like Figma to create amazing user interfaces.',
        icon: <PenTool size={40} className="text-secondary" />,
        color: 'from-purple-500/20 to-secondary/20'
    },
    {
        title: 'Frontend Development',
        desc: 'Proficient in HTML, CSS, JavaScript, ReactJS, Bootstrap and MUI for crafting beautiful, interactive frontends.',
        icon: <Layout size={40} className="text-pink-500" />,
        color: 'from-pink-500/20 to-rose-500/20'
    },
    {
        title: 'Backend Development',
        desc: 'Experienced with Java, Spring Boot, Go, Python for backend development and proficient in MySQL and MongoDB.',
        icon: <Database size={40} className="text-accent" />,
        color: 'from-green-500/20 to-accent/20'
    },
    {
        title: 'Project Management',
        desc: 'Familiar with Jira for team collaboration, and GitHub/Bitbucket for version control.',
        icon: <Kanban size={40} className="text-orange-500" />,
        color: 'from-orange-500/20 to-yellow-500/20'
    },
    {
        title: 'Testing & Automation',
        desc: 'Proficient in Postman, RestAssured, Serenity-BDD, Selenium, Cucumber for automated testing and API validation.',
        icon: <TestTube size={40} className="text-indigo-500" />,
        color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
        title: 'AI and R&D',
        desc: 'Familiar with Python, RAG, Pipecat, Neo4j Graph Database, MCP, MCP UI, and Grafana for building intelligent systems and dashboards.',
        icon: <Cpu size={40} className="text-teal-500" />,
        color: 'from-teal-500/20 to-emerald-500/20'
    },
    {
        title: 'DevOps & Cloud',
        desc: 'Experienced with Docker, Kubernetes (K8s), Jenkins, Harbor, and AWS services (e.g., S3) for CI/CD and cloud infrastructure.',
        icon: <Cloud size={40} className="text-sky-500" />,
        color: 'from-sky-500/20 to-cyan-500/20'
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
