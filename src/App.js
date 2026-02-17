import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import './styles/global.css';
import './App.css';
import ProfessionalBackground from './components/ProfessionalBackground';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider>
            <ProfessionalBackground />
            <Router>
                <ScrollToTop />
                <div className="App">
                    <AnimatedRoutes />
                    <BackToTop />
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}



export default App;