import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Contact.css";

const Contact = () => {
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
    }
  };

  const { isDarkMode } = useTheme();

  return (
    <section
      className={`contact ${isDarkMode ? "dark-mode" : ""}`}
      id="contact"
    >
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Let's work together</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>mahboobalam7131@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 6396281660</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com"
                target="https://github.com/MahboobAlam0"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="https://www.linkedin.com/in/mahboobalam786/"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.kaggle.com/armahboobalam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-kaggle"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                placeholder="Your Message"
                rows="5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <i className="fas fa-paper-plane"></i>
            </button>
            {status === "success" && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error-message">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Contact;
