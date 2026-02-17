import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Experience.css";

const Experience = ({ isStandalone = true }) => {
  const { isDarkMode } = useTheme();
  const { ref, controls } = useScrollReveal();

    const experienceContent = (
      <div className="resume-card-list">
            <motion.div variants={itemVariants}>
                <ResumeCard
                    title="Research Intern"
                    subTitle="Defence Institute of Advanced Technology (DIAT–DRDO), Pune"
                    result="Jun 2025 – Present"
                    des={
                        <ul className="experience-list">
                            <li>Designed and trained a Physics-Informed Attention U-Net (PIAUNet) for underwater image segmentation.</li>
                            <li>Improved model inference, achieving a +3.52% boost in Dice score and +3.90% mIoU over baseline U-Net.</li>
                            <li>Developed robust, end-to-end PyTorch pipelines for data preprocessing, augmentation, training, and validation.</li>
                            <li>Integrated domain physics constraints (e.g., light attenuation) to enhance model robustness in noisy environments.</li>
                        </ul>
                    }
                />
            </motion.div>
      </div>
    );

  if (!isStandalone) {
      return (
        <motion.div 
            className={`experience-standalone ${isDarkMode ? "dark-mode" : ""}`}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {experienceContent}
        </motion.div>
      );
  }

  return (
    <section className={`experience ${isDarkMode ? "dark-mode" : ""}`} id="experience" ref={ref}>
      <div className="container">
        <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>
            Work Experience
            </motion.h2>
            
            {experienceContent}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
