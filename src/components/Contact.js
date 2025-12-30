import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Contact.css";

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
        { icon: "fas fa-phone", title: "Phone", content: "+91 6396281660", link: "tel:+916396281660" },
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
