import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <About />
                <Skills />
                <Projects />
                <Education/>
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;