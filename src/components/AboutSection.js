import React from 'react';
import aga from "../img/aga.jpg";
import {About, Description, Image, Hide} from "../styles";
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnim} from "../animation";
import Wave from "./Wave";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I work to help ensure
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>business </span>succeeds
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>and grows.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact me if you are looking for self-motivated, well-organized and committed junior front-end with a positive attitude to challenges and opportunities.
                </motion.p>
                <motion.button
                    variants={fade}
                >
                    Contact me
                </motion.button>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={aga}
                    alt="main picture"/>
            </Image>
            <Wave/>
        </About>
    );
};

export default AboutSection;

