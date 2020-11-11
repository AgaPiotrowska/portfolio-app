import React from 'react';
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import FaqSection from "../components/FaqSection";
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";

const AboutMe = () => {
    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <AboutSection/>
            <SkillsSection/>
            <FaqSection/>
        </motion.div>
    )
};

export default AboutMe;