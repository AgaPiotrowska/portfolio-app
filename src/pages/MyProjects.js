import React from 'react';
import styled from "styled-components";
import athlete2 from "../img/athlete-small.png";
import {Link} from "react-router-dom";

const MyProjects = () => {
    return (
        <Projects>
            <Portfolio>
                <h2>Forest Spa</h2>
                <div className="line"></div>
                <Link><img src={athlete2} alt="forest spa"/></Link>
            </Portfolio>
            <Portfolio>
                <h2>MP Action Photo</h2>
                <div className="line"></div>
                <Link><img src={athlete2} alt="forest spa"/></Link>
            </Portfolio>
            <Portfolio>
                <h2>Day Planner</h2>
                <div className="line"></div>
                <Link><img src={athlete2} alt="forest spa"/></Link>
            </Portfolio>
        </Projects>
    )};

const Projects=styled.div`
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