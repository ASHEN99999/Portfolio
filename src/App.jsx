import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
    return (
        <div className="relative min-h-screen">
            <ScrollProgress />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
