import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Contact.css";

const HuggingFaceIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1.1em" height="1.1em" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM9.5 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.75 4.5a.75.75 0 0 0-.53 1.28C9.1 16.9 10.5 17.5 12 17.5s2.9-.6 3.78-1.47a.75.75 0 1 0-1.06-1.06c-.6.6-1.65 1.03-2.72 1.03s-2.12-.43-2.72-1.03a.75.75 0 0 0-.53-.22z"/>
    </svg>
);

const Contact = () => {
    const { ref, controls } = useScrollReveal();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call for "real-world" feel in demo or use actual endpoint
        try {
            const response = await fetch("/.netlify/functions/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
            // Auto hide status after 5 seconds
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const { isDarkMode } = useTheme();

    const contactInfo = [
        { icon: "fas fa-envelope", title: "Email", content: "mahboobalam7131@gmail.com", link: "mailto:mahboobalam7131@gmail.com" },
        { icon: "fas fa-phone", title: "Phone", content: "+91-9667250646", link: "tel:+919667250646" },
        { icon: "fas fa-map-marker-alt", title: "Location", content: "New Delhi, India", link: "#" }
    ];

    return (
        <section className={`contact ${isDarkMode ? "dark-mode" : ""}`} id="contact" ref={ref}>
            <div className="container">
                <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.div className="section-header" variants={itemVariants}>
                        <h2>Get In Touch</h2>
                        <p className="contact-subtitle">Have a project in mind? Let's work together</p>
                    </motion.div>

                    <div className="contact-content">
                        <motion.div 
                            className="contact-info-wrapper"
                            variants={itemVariants}
                        >
                            <div className="info-cards">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="info-card glass">
                                        <div className="icon-circle">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <a href={item.link}>{item.content}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="social-connect">
                                <h3>Connect with me</h3>
                                <div className="social-links">
                                    <a href="https://github.com/MahboobAlam0" target="_blank" rel="noopener noreferrer" className="social-btn github" aria-label="GitHub Profile">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mahboobalam786/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn Profile">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://huggingface.co/mahboobalam0" target="_blank" rel="noopener noreferrer" className="social-btn huggingface" aria-label="Hugging Face Profile">
                                        <HuggingFaceIcon />
                                    </a>
                                    <a href="https://www.kaggle.com/armahboobalam" target="_blank" rel="noopener noreferrer" className="social-btn kaggle" aria-label="Kaggle Profile">
                                        <i className="fab fa-kaggle"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form 
                            className="contact-form glass" 
                            onSubmit={handleSubmit}
                            variants={itemVariants}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    required
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    required
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    required
                                    rows="5"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <span><i className="fas fa-spinner fa-spin"></i> Sending...</span>
                                ) : (
                                    <span>Send Message <i className="fas fa-paper-plane"></i></span>
                                )}
                            </button>

                            {status && (
                                <motion.div 
                                    className={`status-message ${status}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {status === "success" ? (
                                        <p><i className="fas fa-check-circle"></i> Message sent successfully!</p>
                                    ) : (
                                        <p><i className="fas fa-exclamation-circle"></i> Failed to send. Please try again.</p>
                                    )}
                                </motion.div>
                            )}
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
