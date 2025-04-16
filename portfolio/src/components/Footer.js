import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const { isDarkMode } = useTheme();
    
    return (
        <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`} id="footer">
            <div className="footer-container">
                <div className="copyright">
                    <p>&copy; {year}. All rights reserved by MA.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;