import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isHome = location.pathname === '/';

    // Helper to determine link target
    const getLink = (anchor) => {
        return isHome ? anchor : `/${anchor}`;
    };

    const handleHomeClick = (e) => {
        // Prevent default only if we are already on home to handle smooth scroll
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleSectionClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <motion.header 
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header-content container">
                <motion.div 
                    className="signature"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" onClick={handleHomeClick} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Logo size={50} />
                    </Link>
                </motion.div>

                <nav className="nav-desktop">
                    <ul className="nav-links">
                        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                        <li><a href={getLink('#skills')}>Skills</a></li>
                        <li><a href={getLink('#projects')}>Projects</a></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href={getLink('#contact')}>Contact</a></li>
                    </ul>
                </nav>

                <div className="header-controls">
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>

                    <button 
                        className="menu-button" 
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="mobile-menu glass"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-nav-links">
                            <motion.li whileHover={{ x: 10 }} onClick={handleHomeClick}>
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} onClick={handleSectionClick}>
                                <a href={getLink('#skills')}>Skills</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} onClick={handleSectionClick}>
                                <a href={getLink('#projects')}>Projects</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} onClick={() => setIsMenuOpen(false)}>
                                <Link to="/blog">Blog</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }} onClick={handleSectionClick}>
                                <a href={getLink('#contact')}>Contact</a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
