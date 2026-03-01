import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Blogs from './sections/Blogs';
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
                <Education />
                <Experience />
                <Skills />
                <Portfolio />
                <Blogs />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
