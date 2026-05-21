import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import './styles/global.css';
import './App.css';
import ProfessionalBackground from './components/ProfessionalBackground';

const Home = lazy(() => import('./components/Home'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const NotFound = lazy(() => import('./components/NotFound'));

const PageLoader = () => (
    <div className="page-loading" role="status" aria-label="Loading page">
        <div className="page-loading-spinner"></div>
    </div>
);

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider>
            <ProfessionalBackground />
            <Router>
                <a href="#main-content" className="skip-nav">Skip to main content</a>
                <ScrollToTop />
                <div className="App">
                    <Suspense fallback={<PageLoader />}>
                        <AnimatedRoutes />
                    </Suspense>
                    <BackToTop />
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}



export default App;