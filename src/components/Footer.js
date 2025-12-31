import React from 'react';
import '../styles/Footer.css'; // Just using inline styles or simple css if available, or assume it uses global footer styles
/* Actually let's just make it simple content */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            width: '100%',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            marginTop: 'auto',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
                <div className="copyright">
                    <p>Designed & Built by <a href="https://github.com/MahboobAlam0" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><strong>Mahboob Alam <i className="fab fa-github"></i></strong></a></p>
                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
                         &copy; {currentYear} • Made with <span style={{ color: '#e25555' }}>♥</span> & React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;