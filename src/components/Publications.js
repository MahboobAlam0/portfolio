import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Publications.css";

const Publications = () => {
  const { isDarkMode } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section className={`publications ${isDarkMode ? "dark-mode" : ""}`} id="publications" ref={ref}>
      <div className="container">
        <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>
            Publications
            </motion.h2>

            <motion.div 
                className="publication-card glass"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
            >
                <div className="pub-icon">
                    <i className="fas fa-book-open"></i>
                </div>
                <div className="pub-content">
                    <h3>Physics-Informed Attention U-Net (PIAUNet): An Enhanced U-Net Framework for Underwater Segmentation in Aquaculture</h3>
                    <p className="authors"><strong>Alam, M.</strong>, et al.</p>
                    <p className="venue">
                        <em>Proceedings of Cutting Edge Technologies in Advanced Computing</em>, Nov 2025.
                    </p>
                    <div className="pub-tags">
                        <span className="tag">Peer-reviewed</span>
                        <span className="tag">Indian Journal of Technical Education (Under Process)</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
