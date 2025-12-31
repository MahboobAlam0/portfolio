import React from 'react';
import '../styles/SectionDivider.css';

const SectionDivider = () => {
    return (
        <div className="section-divider-container">
            <div className="orbital-flux">
                <div className="flux-beam"></div>
                <div className="energy-strand strand-1"></div>
                <div className="energy-strand strand-2"></div>
                <div className="particles">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="particle" style={{ '--i': i }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionDivider;
