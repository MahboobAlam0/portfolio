import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';

const NotFound = () => {
    const { isDarkMode } = useTheme();

    return (
        <>
            <Header />
            <main
                id="main-content"
                className={isDarkMode ? 'dark-mode' : ''}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p style={{
                        fontSize: 'clamp(6rem, 20vw, 10rem)',
                        fontWeight: 800,
                        lineHeight: 1,
                        color: 'var(--accent-color)',
                        fontFamily: 'Outfit, sans-serif',
                        marginBottom: '0.5rem',
                        opacity: 0.15,
                    }}>
                        404
                    </p>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '1rem' }}>
                        Page Not Found
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.75rem',
                            background: 'var(--accent-color)',
                            color: isDarkMode ? 'var(--primary-bg)' : '#fff',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'opacity 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </Link>
                </motion.div>
            </main>
        </>
    );
};

export default NotFound;
