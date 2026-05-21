import React from 'react';
import '../styles/Footer.css';

const HuggingFaceIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1.1em" height="1.1em" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM9.5 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.75 4.5a.75.75 0 0 0-.53 1.28C9.1 16.9 10.5 17.5 12 17.5s2.9-.6 3.78-1.47a.75.75 0 1 0-1.06-1.06c-.6.6-1.65 1.03-2.72 1.03s-2.12-.43-2.72-1.03a.75.75 0 0 0-.53-.22z"/>
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Mahboob Alam</h2>
                        <p className="tagline">ML Engineer | Computer Vision | LLM & RAG</p>
                        <div className="footer-socials">
                            <a href="https://github.com/MahboobAlam0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mahboobalam786/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://huggingface.co/mahboobalam0" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face">
                                <HuggingFaceIcon />
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