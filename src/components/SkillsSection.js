import React from 'react';
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import bulb from "../img/bulb.svg";
import problem from "../img/problem.svg";
import {About, Description} from "../styles";
import styled from "styled-components";
import useScroll  from "./useScroll";
import {scrollReveal} from "../animation";

const SkillsSection = () => {

    const [element, controls] = useScroll();

    return (
        <Skills
            // variants={scrollReveal}
            // animate={controls}
            // initial="hidden"
            // ref={element}
        >
            <DescriptionSkills>
                <h2>Valuable <span>soft</span> skills</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon"/>
                            <h3>Time management</h3>
                        </div>
                        <p>Organized and able to prioritize tasks</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon"/>
                            <h3>Self-motivation</h3>
                        </div>
                        <p>Never stop challenging myself !</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon"/>
                            <h3>Efficiency</h3>
                        </div>
                        <p>Doing things well, successfully and without waste</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Communication</h3>
                        </div>
                        <p>Easy-going, experienced working in international environment</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={problem} width="50" height="50" alt="icon"/>
                            <h3>Problem solving</h3>
                        </div>
                        <p>Finding issues, searching for solutions</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={bulb} width="50" height="50" alt="icon"/>
                            <h3>Creativity</h3>
                        </div>
                        <p>Taking initiative comes naturally to me</p>
                    </Card>
                </Cards>
            </DescriptionSkills>
        </Skills>
    )
};

const Skills = styled(About)`

  h2 {
    padding-bottom: 5rem;
  }
  
  p{
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
  }
`;

const DescriptionSkills=styled(Description)`
    padding-right: 0rem;
`;

const Cards=styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 1300px) {
    justify-content: center;
    }
`;

const Card=styled.div`
  flex-basis: 20rem;
  margin: 0 auto;
  
  .icon {
  display: flex;
  align-items: center;
  
  h3 {
  margin-left: 1rem;
  background-color: white;
  color: black;
  padding: 0.7rem;
  }
  }
`;

export default SkillsSection;