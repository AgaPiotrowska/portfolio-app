import React from 'react';
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import FaqSection from "../components/FaqSection";
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop"

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
            <ScrollTop/>
        </motion.div>
    )
};

export default AboutMe;