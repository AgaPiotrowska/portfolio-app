import React from 'react';
import aga from "../img/aga.jpg";
import {About, Description, Image, Hide} from "../styles";
import {motion} from "framer-motion";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>
                            I work to help ensure
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>business </span>succeeds
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>and grows.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact me if you are looking for self-motivated, well-organized and committed junior front-end with a positive attitude to challenges and opportunities.</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={aga} alt="main picture"/>
            </Image>
        </About>
    );
};

export default AboutSection;