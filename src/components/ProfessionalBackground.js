import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProfessionalBackground = () => {
    const { isDarkMode } = useTheme();

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
            }}
            aria-hidden="true"
        />
    );
};

export default ProfessionalBackground;
