import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Logo = ({ size = 50 }) => {
    const { isDarkMode } = useTheme();

    // Professional Palette: Metallic Silver/White for Dark, Deep Violet for Light
    const strokeColor = isDarkMode ? '#e2e8f0' : '#1e293b';
    const accentColor = '#7c3aed';

    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Circle - Subtle and clean */}
            <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill={isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 
                stroke={isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'} 
                strokeWidth="1"
            />

            {/* Geometric M */}
            {/* Sharp, architectural vertices */}
            <path 
                d="M30 70 V35 L50 55 L70 35 V70" 
                stroke={strokeColor} 
                strokeWidth="2.5" 
                strokeLinecap="butt" 
                strokeLinejoin="miter"
                fill="none"
            />

            {/* Geometric A - Interlocking */}
            {/* Overlaying cleanly */}
            <path 
                d="M35 70 L50 25 L65 70" 
                stroke={accentColor} 
                strokeWidth="2.5" 
                strokeLinecap="butt" 
                strokeLinejoin="miter"
                fill="none"
            />
            
            {/* The 'A' Crossbar - Clean horizontal */}
            <line 
                x1="40" 
                y1="58" 
                x2="60" 
                y2="58" 
                stroke={accentColor} 
                strokeWidth="2.5" 
            />

            {/* Optional: subtle cutout effect where lines cross to show depth? 
               For "very professional", simpler is usually better. 
               Keeping it flat and sharp.
            */}
        </svg>
    );
};

export default Logo;
