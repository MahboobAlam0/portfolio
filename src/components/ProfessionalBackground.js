import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProfessionalBackground = () => {
    const { isDarkMode } = useTheme();

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: -1,
            backgroundColor: isDarkMode ? '#0a0a0a' : '#f8f9fa', // Deep dark or clean white
        },
        grid: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: isDarkMode 
                ? 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        },
        gradientOrb: {
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '600px',
            height: '600px',
            background: isDarkMode 
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)' // Subtle Violet/Indigo
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.03) 50%, transparent 70%)', // Subtle Blue/Purple
            filter: 'blur(60px)',
            borderRadius: '50%',
            zIndex: 0,
        },
        secondaryOrb: {
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '500px',
            height: '500px',
            background: isDarkMode 
                ? 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)' // Cyan hint
                : 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
            borderRadius: '50%',
            zIndex: 0,
        }
    };

    return (
        <div style={styles.container} aria-hidden="true">
            {/* Technical Grid Pattern */}
            <div style={styles.grid}></div>
            
            {/* Subtle Lighting Accents */}
            <div style={styles.gradientOrb}></div>
            <div style={styles.secondaryOrb}></div>
        </div>
    );
};

export default ProfessionalBackground;
