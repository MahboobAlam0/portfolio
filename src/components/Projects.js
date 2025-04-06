import React, { useState } from 'react';
import stockImage from '../assets/images/ProjectImages/StockPredictor.png';
import segmentationImage from '../assets/images/ProjectImages/CustomerSegmentation.jpg';
import sentimentImage from '../assets/images/ProjectImages/SentimentAnlysis.jpg';
import churnImage from '../assets/images/ProjectImages/Churn.png';
import medicalInsuranceImage from '../assets/images/ProjectImages/MedicalImage.jpeg';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projectList = [
        {
            title: 'Medical Insurance Cost Analysis Predictor',
            description: 'Implementing Linear Regression algorithm to predict medical insurane cost with 78.30 % accuracy using Python.',
            image: medicalInsuranceImage,
            category: 'machine-learning',
            techStack: ['Python', 'Linear Regression', 'Pandas','Numpy', 'Scikit-learn'],
            github: 'https://github.com/MahboobAlam0/medicalinsurancecostanalysis',
            demo: 'https://medicalinsurancecostanalysis0.streamlit.app',
        },
        {
            title: 'Telecom Customer Churn Predictive Analysis',
            description: "Implemented RandomForestClassifier to predict customer's churn based on churning behavior for targeted marketing.",
            image: churnImage,
            category: 'data-analysis',
            techStack: ['Python', 'Scikit-learn', 'Matplotlib', 'Random Forest Classifier', 'Streamlit'],
            github: 'https://github.com/MahboobAlam0/customerchurn',
            demo: 'https://customerchurn-0.streamlit.app/',
        }
        // },
        // {
        //     title: 'Machine Learning Stock Predictor',
        //     description: 'Built an LSTM-based deep learning model to predict stock market trends with 85% accuracy using Python and TensorFlow.',
        //     image: stockImage,
        //     category: 'machine-learning',
        //     techStack: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
        //     github: 'https://github.com/username/stock-predictor',
        //     demo: 'https://demo-link.com',
        // },
        // {
        //     title: 'Customer Segmentation Analysis',
        //     description: 'Implemented K-means clustering to segment customers based on purchasing behavior for targeted marketing.',
        //     image: segmentationImage,
        //     category: 'data-analysis',
        //     techStack: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        //     github: 'https://github.com/username/customer-segmentation',
        //     demo: 'https://demo-link.com',
        // },
        // {
        //     title: 'Sentiment Analysis Dashboard',
        //     description: 'Created a real-time sentiment analysis dashboard for social media data using NLP techniques.',
        //     image: sentimentImage,
        //     category: 'nlp',
        //     techStack: ['Python', 'NLTK', 'React', 'Flask'],
        //     github: 'https://github.com/username/sentiment-dashboard',
        //     demo: 'https://demo-link.com',
        // }
    ];
    const { isDarkMode } = useTheme();
    const categories = ['all', 'machine-learning', 'data-analysis', 'nlp'];

    const filteredProjects = filter === 'all' 
        ? projectList 
        : projectList.filter(project => project.category === filter);

    return (
        <section className={`projects ${isDarkMode ? 'dark-mode' : ''}`} id="projects">
            <h2>Featured Projects</h2>
            
            <div className="category-filters">
                {categories.map(category => (
                    <button 
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category.split('-').join(' ').toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <i className="fab fa-github"></i> Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-divider"></div>
        </section>
    );
};

export default Projects;
