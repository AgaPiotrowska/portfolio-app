import React from 'react';
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import {About, Description, Image, Hide} from "../styles";
import styled from "styled-components";

const SkillsSection = () => {
    return (
        <Skills>
            <Description>
                <h2>Valuable <span>soft</span> skills</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon"/>
                            <h3>Problem-solving</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon"/>
                            <h3>Self-motivation</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon"/>
                            <h3>Time-management</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Communication</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Efficiency</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Creativity</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
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

const Cards=styled.div`
  display: flex;
  flex-wrap: wrap;
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