import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

            <div className="container blog-post-container">
                <Link to="/blog" className="back-link">
                    <i className="fas fa-arrow-left"></i> Back to All Posts
                </Link>
                
                <div className="blog-post-card">
                    <div className="post-header">
                        <h1>{post.title}</h1>
                        <div className="post-meta">
                            <span>{post.date}</span>
                            <span className="read-time-post">
                                <i className="far fa-clock"></i> {Math.ceil(post.content.replace(/<[^>]+>/g, '').split(/\s+/).length / 200)} min read
                            </span>
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
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
