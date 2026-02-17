import React from 'react';
import '../styles/Footer.css'; // Just using inline styles or simple css if available, or assume it uses global footer styles
/* Actually let's just make it simple content */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Mahboob Alam</h2>
                        <p className="tagline">Building Intelligent Systems | Exploring Deep Learning</p>
                        <div className="footer-socials">
                            <a href="https://github.com/MahboobAlam0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mahboobalam786/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.kaggle.com/armahboobalam" target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
                                <i className="fab fa-kaggle"></i>
                            </a>
                            <a href="mailto:mahboobalam7131@gmail.com" aria-label="Email">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#projects">Projects</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <p><i className="fas fa-map-marker-alt"></i> New Delhi, India</p>
                        <p><i className="fas fa-envelope"></i> mahboobalam7131@gmail.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Mahboob Alam. All rights reserved.</p>
                    <p className="credit">Designed & Built with <span style={{ color: '#e25555' }}>♥</span> & React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;