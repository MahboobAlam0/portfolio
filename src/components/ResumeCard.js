import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ResumeCard.css';

const ResumeCard = ({ title, subTitle, result, des }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="resume-card glass"
        >
            <div className="card-content">
                <h3>{title}</h3>
                <p className="subtitle">{subTitle}</p>
                <p className="result">{result}</p>
                <div className="description">{des}</div>
            </div>
        </motion.div>
    );
};

export default ResumeCard;