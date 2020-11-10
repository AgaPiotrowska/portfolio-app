import React from 'react';
import aga from "../img/aga.jpg";
import styled from "styled-components";
import {About, Description, Image, Hide} from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I work to help ensure</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>business </span>succeeds
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>and grows.</h2>
                    </Hide>
                </div>
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