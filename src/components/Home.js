import React from 'react';
import Header from './Header';
import About from './About';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import Resume from './Resume';
import Projects from './Projects';
import Publications from './Publications';
import Contact from './Contact';
import SectionDivider from './SectionDivider';

const Home = () => {
    return (
        <>
            <Header />
            <main id="main-content">
                <ScrollRevealWrapper>
                    <About />
                </ScrollRevealWrapper>
                <SectionDivider />
                
                <ScrollRevealWrapper delay={0.1}>
                    <Resume />
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
                    <Contact />
                </ScrollRevealWrapper>
            </main>
        </>
    );
};

export default Home;
