import React from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Publications from './Publications';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Publications />
                <Education />
                <Contact />
            </main>
        </>
    );
};

export default Home;
