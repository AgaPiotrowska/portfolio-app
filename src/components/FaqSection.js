import React from 'react';
import styled from "styled-components";
import {About} from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import useScroll from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <Faq
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="What is my tech profile?">
                        <div className="answer">
                            <p><b>Good knowledge:</b> JS, React, Redux, HTML, CSS, SCSS, Grid, styled-components, RWD, REST API, Framer Motion, Gulp, Webpack</p>
                            <p><b>Basic knowledge:</b> AWS</p>
                            <p><b>Still learning:</b> Node.js, MongoDB, TypeScript</p>
                            <p><b>Design patterns:</b> Figma</p>
                            <p><b>Version control:</b> GIT, Sourcetree</p>
                        </div>
                </Toggle>
                <Toggle title="What is my work experience?">
                        <div className="answer">
                            <p><b>IT Internship:</b> developing <a style={{color: "#CCCCCC"}} href="https://eldronado.pl/">ELDRONADO</a></p>
                            <p><b>Sales manager of sports outdoor brands (Black Diamond, Pieps, Gregory Packs)</b> 2017 - 2020</p>
                            <p>All sales functions for all the customers on the local market, including key accounts, maintain business and customer relations, product trainings, marketing support</p>
                            <p><b>Customer Service for Central Eastern Europe and France at Black Diamond Equipment, Innsbruck Austria</b> 2016 - 2017</p>
                            <p>Management of orders and warranty cases for international customers across Europe</p>

                        </div>
                </Toggle>
                <Toggle title="What are my soft skills?">
                        <div className="answer">
                            <p>Enthusiasm and <b>high energy</b> working with other people</p>
                            <p><b>Easy-going</b> establishing contacts with others</p>
                            <p>Experienced working in <b>international</b> environment</p>
                            <p><b>Self-motivated</b> and able to work on my own</p>
                            <p>Good sense of <b>communication</b> (5 years of experience as sales rep) </p>
                            <p><b>Organized</b> and able to priorities tasks</p>
                            <p>Taking <b>initiative</b> comes naturally to me</p>
                            <p>Enjoy <b>supporting</b> and developing others</p>
                            <p>Never stop <b>challenging</b> myself</p>
                        </div>
                </Toggle>
                <Toggle title="What is my educational background?">
                        <div className="answer">
                            <p>CodersLab <b>JavaScript Developer – React</b></p>
                            <p><b>Up to date with:</b> Śniadania z programowaniem, Warsaw JS Meetup</p>
                            <p><b>International student exchange:</b> UBC, Vancouver <b>Canada</b> (English Philology), Telavi State University <b>Georgia</b> (English Philology), Sciences Politiques, Bordeaux <b>France</b> (English Philology), UW Warsaw (Journalism, Marketing and PR)</p>
                            <p>Languages: <b>English</b> (fluent), <b>French</b> (good command), <b>Spanish</b> (basic)</p>
                        </div>
                </Toggle>y
                <Toggle title="Interests?">
                    <div className="answer">
                        <p>Passion for <b>outdoor sports</b> like trekking, climbing, skiing, skitouring, trail running</p>
                        <p><b>Travelling</b> (over 35 countries visited)</p>
                        <p>Foreign <b>languages</b> - always excited to study something new</p>
                        <p>Dog lover (privately owner of a vigorous Bearded Collie)</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq=styled(About)`
  display: block;
  
  span {
  display: block;
  }
  
  h2 {
  padding-bottom: 2rem;
  font-weight: lighter;
  }
  
  .faq-line {
  background-color: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
  }
  
  .question {
  padding: 3rem 0rem;
  cursor: pointer;
  }
  
  .answer {
  padding: 2rem 0rem;
  
  p{
  padding: 1rem 0rem;
  }
  
      @media (max-width: 1300px) {
        text-align: center;
    }
`;

export default FaqSection;