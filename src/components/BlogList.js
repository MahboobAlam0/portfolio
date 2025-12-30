import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogsData } from '../data/blogsData';
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import '../styles/Blog.css';

const BlogList = () => {
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();

    return (
        <section className={`blog-section ${isDarkMode ? 'dark-mode' : ''}`} ref={ref}>
            <Header />
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2>My Daily Learnings</h2>
                        <p className="blog-subtitle">Documenting my journey through Data Science & AI</p>
                    </motion.div>

                    <div className="blog-grid">
                        {blogsData.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="blog-card glass"
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div>
                                    <div className="blog-date">{post.date}</div>
                                    <h3>
                                        <Link to={`/blog/${post.id}`} className="blog-title-link">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <div className="blog-tags">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="blog-tag">#{tag}</span>
                                        ))}
                                    </div>
                                    <p className="excerpt">{post.summary}</p>
                                </div>
                                <Link to={`/blog/${post.id}`} className="read-more">
                                    Read Article <i className="fas fa-arrow-right"></i>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogList;
