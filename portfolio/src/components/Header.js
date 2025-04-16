import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
            <div className="signature">Mahboob Alam</div>
                <nav className="nav-center">
                    <button className="menu-button" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#about">Home</a></li>
                        <li><a href="/https://insightlog.netlify.app/">Blogs</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Header;