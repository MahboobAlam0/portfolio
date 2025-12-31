import React from 'react';
import Header from './Header';
import About from './About';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Publications from './Publications';
import Education from './Education';
import Contact from './Contact';
import SectionDivider from './SectionDivider';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <ScrollRevealWrapper>
                    <About />
                </ScrollRevealWrapper>
                <SectionDivider />
                
                <ScrollRevealWrapper delay={0.1}>
                    <Experience />
                </ScrollRevealWrapper>
                <SectionDivider />

                <ScrollRevealWrapper delay={0.1}>
                    <Skills />
                </ScrollRevealWrapper>
                <SectionDivider />

                <ScrollRevealWrapper delay={0.1}>
                    <Projects />
                </ScrollRevealWrapper>
                <SectionDivider />

                <ScrollRevealWrapper delay={0.1}>
                    <Publications />
                </ScrollRevealWrapper>
                <SectionDivider />

                <ScrollRevealWrapper delay={0.1}>
                    <Education />
                </ScrollRevealWrapper>
                <SectionDivider />

                <ScrollRevealWrapper delay={0.1}>
                    <Contact />
                </ScrollRevealWrapper>
            </main>
        </>
    );
};

export default Home;
