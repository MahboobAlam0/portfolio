import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import '../styles/Blog.css';

const BlogList = () => {
    const { isDarkMode } = useTheme();
    const [searchTerm, setSearchTerm] = React.useState('');

    // Helper to calculate reading time
    const getReadingTime = (content) => {
        const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    };

    const filteredBlogs = blogsData.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <section className={`blog-section ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header />
            <div className="container">
                <ScrollRevealWrapper>
                    <div className="blog-header-center">
                        <h2>My Daily Learnings</h2>
                        <p className="blog-subtitle">Documenting my journey through Data Science & AI</p>
                        
                        <div className="search-wrapper">
                            <i className="fas fa-search search-icon"></i>
                            <input 
                                type="text" 
                                placeholder="Search articles, tags..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="blog-search-input"
                            />
                        </div>
                    </div>
                </ScrollRevealWrapper>

                <div className="blog-grid">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((post, index) => (
                            <ScrollRevealWrapper key={post.id} delay={index * 0.05}>
                                <div className="blog-card">
                                    <div>
                                        <div className="blog-meta-top">
                                            <span className="blog-date">{post.date}</span>
                                            <span className="read-time"><i className="far fa-clock"></i> {getReadingTime(post.content)}</span>
                                        </div>
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
                                </div>
                            </ScrollRevealWrapper>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No articles found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
