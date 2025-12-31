import React from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollRevealWrapper = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div 
            ref={ref} 
            className={`transition-wrapper ${isInView ? 'materialize-visible' : 'materialize-hidden'}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default ScrollRevealWrapper;
