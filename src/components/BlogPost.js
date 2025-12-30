import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogsData } from '../data/blogsData';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import '../styles/Blog.css';

const BlogPost = () => {
    const { id } = useParams();
    const { isDarkMode } = useTheme();
    const post = blogsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!post) {
        return (
            <div className={`blog-post-section ${isDarkMode ? 'dark-mode' : ''}`}>
                <Header />
                <div className="container">
                    <h2>Post not found</h2>
                    <Link to="/blog" className="back-link">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className={`blog-post-section ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header />
            {/* Reading Progress Bar */}
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />

            <div className="container blog-post-container">
                <Link to="/blog" className="back-link">
                    <i className="fas fa-arrow-left"></i> Back to All Posts
                </Link>
                
                <motion.div 
                    className="glass" 
                    style={{ padding: '2rem', borderRadius: '20px' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <div className="post-header">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {post.title}
                        </motion.h1>
                        <div className="post-meta">
                            <span>{post.date}</span>
                            <div className="blog-tags">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="blog-tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div 
                        className="post-content" 
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                </motion.div>
            </div>
        </article>
    );
};

export default BlogPost;
