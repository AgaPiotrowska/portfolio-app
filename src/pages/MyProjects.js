import React from 'react';
import styled from "styled-components";
import forestspa1 from "../img/forestspa1.png"
import mpaction1 from "../img/mpaction1.png"
import dayplanner2 from "../img/dayplanner2.png"
import musicplayer1 from "../img/musicplayer1.png"
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MyProjects = () => {
    return (
        <Projects
            style={{background: "#fff"}}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <Portfolio>
                <h2>Forest Spa</h2>
                <div className="line"></div>
                <Link to="/portfolio/forest-spa">
                    <img src={forestspa1} alt="forest spa"/>
                </Link>
            </Portfolio>
            <Portfolio>
                <h2>MP Action Photo</h2>
                <div className="line"></div>
                <Link to="/portfolio/mpaction-photo">
                    <img src={mpaction1} alt="mp action photo"/>
                </Link>
            </Portfolio>
            <Portfolio>
                <h2>Day Planner</h2>
                <div className="line"></div>
                <Link to="/portfolio/day-planner">
                    <img src={dayplanner2} alt="day planner"/>
                </Link>
            </Portfolio>
            <Portfolio>
                <h2>Music Player</h2>
                <div className="line"></div>
                <Link to="/portfolio/music-player">
                    <img src={musicplayer1} alt="music player"/>
                </Link>
            </Portfolio>
        </Projects>
    )};

const Projects=styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  
  h2{
  padding: 1rem 0rem;
  }
`;

const Portfolio=styled.div`
  padding-bottom: 10rem;
  
  .line {
  height: 0.5rem;
  margin-bottom: 3rem;
  background-color: #cccccc;
  }
  
  img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  }
`;

export default MyProjects;