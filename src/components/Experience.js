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
                    subTitle="Defence Institute of Advanced Technology (DIAT-DU), Pune"
                    result="May 2025 – April 2026"
                    des={
                        <ul className="experience-list">
                            <li>Designed <strong>PIAU-Net</strong> by embedding the Jaffe-McGlamery optical scattering model into an Attention U-Net — the first physics-informed architecture for underwater fish segmentation — trained on NVIDIA RTX 6000 Ada (48 GB) with mixed precision; achieved <strong>97.38% mIoU</strong> on LFish and <strong>93.98%</strong> on AquaOV255, outperforming DeepLabV3+ by +3.44 pp.</li>
                            <li>Built <strong>LiteFishSeg</strong> (MobileNetV3+BiFPN+FCOS, 9.08M params) achieving <strong>80.3% mIoU</strong> at 2.7× fewer parameters than YOLOv10l-seg; and <strong>FishSegDet</strong> (ConvNeXt-V2-L+BiFPN+TAL) reaching <strong>70.0% mAP, 95.1% mAP₅₀, 99.1% PA</strong> — surpassing YOLOv11l-seg by +7.10 pp mAP₅₀.</li>
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
