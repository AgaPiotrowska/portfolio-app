import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <ContactStyle
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <ContactLinks>
                            <a href="mailto:agniegrabo@gmail.com"><h2>Send an email.</h2></a>
                        </ContactLinks>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <ContactLinks>
                            <a href="tel:0048798743493"><h2>Call.</h2></a>
                        </ContactLinks>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <ContactLinks>
                            <a href="https://github.com/AgaPiotrowska"><h2>GitHub.</h2></a>
                        </ContactLinks>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
    }
    
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
    
        @media (max-width: 400px) {
        padding: 1rem;
        font-size: 0.5rem;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #2B7A78;
  
  @media (max-width: 500px) {
      width: 1.5rem;
      height: 1.5rem;
    }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    
  @media (max-width: 500px) {
    font-size: 2rem;
    }
  }
`;

const ContactLinks=styled.div`
    a {
    text-decoration: none;
    color: black;
    }
    
    :hover {
    text-decoration: underline;
    }
`;

export default ContactUs;
